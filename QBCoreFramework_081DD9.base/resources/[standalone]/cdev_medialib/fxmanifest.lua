fx_version 'cerulean'

game "gta5"

author "cDev"
version '1.0.0'

lua54 'yes'

ui_page 'html/index.html'

files {
  'html/**',
}

shared_script {
    'public/config.lua'
}

client_script {
  "utils/**",
  "client/classes/**",
  "client/core.lua",
}

server_script {
  "server/server.js"
}

escrow_ignore {
  'public/**',
  'node_modules/**'
}

data_file 'DLC_ITYP_REQUEST' 'stream/cdev_greenscreen.ytyp'
dependency '/assetpacks'