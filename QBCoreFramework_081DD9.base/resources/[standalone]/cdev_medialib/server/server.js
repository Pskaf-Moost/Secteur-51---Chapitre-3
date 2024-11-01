const Koa = require('koa');
const getRawBody = require('raw-body');
const fs = require('fs');
const path = require('path');
const GIFEncoder = require('gif-encoder-2');
const Jimp = require('jimp');

const app = new Koa();
const resourcePath = GetResourcePath(GetCurrentResourceName());
const dirPath = path.join(resourcePath, 'data', 'videos');

const TARGET_COLOR = [3, 222, 9];
const REPLACEMENT_COLOR = [255, 0, 255]; 

const encoderStore = {};

const processingStatus = {};

async function processFrames(encoderData, width, height, colorTolerance, fileName) {
    const { encoder, writeStream, framesBuffer } = encoderData;

    processingStatus[fileName] = {
        status: 'processing',
        framesProcessed: 0,
        totalFrames: encoderData.totalFramesExpected || 0,
    };

    while (true) {
        const frameIndexes = Object.keys(framesBuffer).map(Number).sort((a, b) => a - b);

        if (frameIndexes.length === 0) {
            if (encoderData.isLastFrameReceived) {
                console.log(`All frames processed for ${fileName}. Finalizing GIF.`);
                encoder.finish(); 

                await new Promise((resolve, reject) => {
                    writeStream.on('finish', resolve);
                    writeStream.on('error', reject);
                });

                processingStatus[fileName].status = 'complete';

                delete encoderStore[fileName];
                console.log(`GIF creation completed for ${fileName}`);
                break;
            } else {
                // Wait for more frames
                await new Promise((resolve) => setTimeout(resolve, 100));
                continue;
            }
        }

        for (const frameIndex of frameIndexes) {
            const frameData = framesBuffer[frameIndex];
            if (frameData) {
                //console.log(`Processing frame ${frameIndex} for ${fileName}`);
                try {
                    const frameBitmapData = await processFrame(
                        frameData,
                        width,
                        height,
                        TARGET_COLOR,
                        REPLACEMENT_COLOR,
                        colorTolerance
                    );

                    encoder.addFrame(frameBitmapData);

                    delete framesBuffer[frameIndex];

                    processingStatus[fileName].framesProcessed++;

                } catch (error) {
                    console.error(`Error processing frame ${frameIndex} for ${fileName}:`, error);
                    processingStatus[fileName].status = 'error';
                    break;
                }
            }
        }
    }
}

async function processFrame(frameData, width, height, targetColor, replacementColor, tolerance) {
    const base64Data = frameData.split(',')[1];
    if (!base64Data) {
        throw new Error('Invalid frame data received');
    }
    const buffer = Buffer.from(base64Data, 'base64');
    if (buffer.length === 0) {
        throw new Error('Decoded buffer is empty');
    }

    const image = await Jimp.read(buffer);

    image.rgba(true);

    image.resize(width, height);
    replaceColorWithColor(image, targetColor, replacementColor, tolerance);

    return image.bitmap.data;
}

function replaceColorWithColor(image, targetColor, replacementColor, tolerance) {
    const data = image.bitmap.data;
    const length = data.length;

    const targetR = targetColor[0];
    const targetG = targetColor[1];
    const targetB = targetColor[2];
    const replacementR = replacementColor[0];
    const replacementG = replacementColor[1];
    const replacementB = replacementColor[2];

    for (let i = 0; i < length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (
            Math.abs(r - targetR) <= tolerance &&
            Math.abs(g - targetG) <= tolerance &&
            Math.abs(b - targetB) <= tolerance
        ) {
            data[i] = replacementR;
            data[i + 1] = replacementG;
            data[i + 2] = replacementB;
            data[i + 3] = 0; 
        }
    }
}

app.use(async (ctx, next) => {
    if (ctx.method === 'GET' && ctx.path === '/status') {
        const fileName = ctx.query.fileName;
        if (!fileName) {
            ctx.status = 400;
            ctx.body = { error: 'Missing fileName parameter' };
            return;
        }

        const statusData = processingStatus[fileName];
        if (statusData) {
            ctx.body = statusData;
        } else {
            ctx.body = { status: 'unknown' };
        }
    } else {
        await next();
        ctx.body = { status: 'ok' };
    }
});

app.use(async (ctx) => {
    if (ctx.method === 'POST' && ctx.path === '/upload') {
        try {
            const body = JSON.parse(await getRawBody(ctx.req, {
                encoding: 'utf8',
                length: ctx.req.headers['content-length'],
            }));
            const { frame, frameIndex, width, height, delay, quality, fileName, tolerance, isLastFrame } = body;

            if (frameIndex === undefined || frameIndex === null) {
                ctx.status = 400;
                ctx.body = { error: 'Missing frameIndex' };
                return;
            }
            if (!width || !height || !delay || !fileName || !quality) {
                ctx.status = 400;
                ctx.body = { error: 'Missing required fields' };
                return;
            }

            const colorTolerance = tolerance !== undefined ? tolerance : 50; 

            if (!encoderStore[fileName]) {
                const filePath = path.join(dirPath, `${fileName}.gif`);
                const writeStream = fs.createWriteStream(filePath);

                const encoder = new GIFEncoder(width, height);
                encoder.createReadStream().pipe(writeStream);
                encoder.start();
                encoder.setRepeat(0); 
                encoder.setDelay(delay); 
                encoder.setQuality(quality);

                encoder.setTransparent(
                    (REPLACEMENT_COLOR[0] << 16) | (REPLACEMENT_COLOR[1] << 8) | REPLACEMENT_COLOR[2]
                );

                encoderStore[fileName] = {
                    encoder,
                    writeStream,
                    framesBuffer: {},
                    isLastFrameReceived: false,
                    processingPromise: null,
                    totalFramesExpected: 0,
                };
            }

            const encoderData = encoderStore[fileName];

            if (frame) {
                encoderData.framesBuffer[frameIndex] = frame;
            }

            if (isLastFrame) {
                encoderData.isLastFrameReceived = true;
                encoderData.totalFramesExpected = frameIndex + 1; 
                console.log(`Last frame received for ${fileName}`);

                if (processingStatus[fileName]) {
                    processingStatus[fileName].totalFrames = encoderData.totalFramesExpected;
                }
            }

            if (!encoderData.processingPromise) {
                encoderData.processingPromise = processFrames(encoderData, width, height, colorTolerance, fileName);
            }

            ctx.body = { status: 'ok', message: 'Frame received and enqueued for processing!' };
        } catch (err) {
            console.error('Error processing the request:', err);
            ctx.status = 500;
            ctx.body = { error: 'Failed to process the frame upload request' };
        }
    } else {
        ctx.status = 404;
        ctx.body = { error: 'Endpoint not found' };
    }
});

app.listen(30120, () => {
    console.log('Server running on port 30120');
});
