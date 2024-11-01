
function isVIP()
    -- check to see if its vip
    if not PublicSharedEmoteConfig.Standalone then
        return clib.api.Character.IsVIP()
    end

    return true 
end

function isDead()
    -- check to see if the player is dead
    return IsEntityDead(PlayerPedId())
end

local function getPlayerPedType(pedentity)

    for key, v in pairs(PublicSharedEmoteConfig.PedsTypes) do 
        for _, ped in pairs(v) do
            if GetHashKey(ped) == GetEntityModel(pedentity) then
                return key
            end
        end
    end

    return "default"
end

--- @param string title
--- @param string text
--- @param int duration (in seconds)
--- @param int source (optional)
function AddWarningNotification(title, text, duration, source)

    -- check if the emote menu is standalone
    if not PublicSharedEmoteConfig.Standalone then
        if source then
            -- server side
            clib.api.SNotify.AddWarningNotification(source, title, text, duration)
            return 
        end
    
        -- client
        clib.api.Notify.AddWarningNotification(title, text, duration)            
    end

    -- if the emote menu is standalone then use your notify system
end

function AdditionalRules(animinfo, person, ped)
    local isServer = ped ~= nil or false
    ped = ped or PlayerPedId()
    local canPlayAnim = true

    if person and animinfo[person].allowPedTypes then 
        for _, v in pairs(animinfo[person].allowPedTypes) do 

            if v == getPlayerPedType(ped) then
                canPlayAnim = true
            else 
                canPlayAnim = false
            end

        end
    else
        if getPlayerPedType(ped) == "default" then
            canPlayAnim = true
        else
            canPlayAnim = false
        end
    end

    if not animinfo.rules then 
        return canPlayAnim
    end

    if animinfo.rules.blockVehicle and (isServer and GetVehiclePedIsIn(ped, false) ~= 0 or not isServer and IsPedInAnyVehicle(ped, false)) then
        canPlayAnim = false
    end

    if animinfo.rules.blockFoot and (isServer and GetVehiclePedIsIn(ped, false) == 0 or not isServer and not IsPedInAnyVehicle(ped, false))then
        canPlayAnim = false
    end

    return canPlayAnim
end