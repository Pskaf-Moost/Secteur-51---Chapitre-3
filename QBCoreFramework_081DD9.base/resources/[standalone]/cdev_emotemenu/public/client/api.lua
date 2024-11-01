api = class("api")

local function onPlayerLoad()
    exports.cdev_emotemenu:initializeWalkStyle()
    exports.cdev_emotemenu:initializeExpression()
end

local function onPlayerUnload()
    exports.cdev_emotemenu:resetWalkStyle()
    exports.cdev_emotemenu:resetExpression()
end

function api:constructor()
    AddResourceStartFunction(function()
        onPlayerLoad()
    end)
    
    AddResourceStopFunction(function()
        onPlayerUnload()
    end)  
    
    -- check if the emote menu is standalone
    if not PublicSharedEmoteConfig.Standalone then 
        clib.events.BindPlayerLoadEvent(onPlayerLoad)
    end
end

function api.GetPlayerName(playerId)
    return GetPlayerName(playerId)
end