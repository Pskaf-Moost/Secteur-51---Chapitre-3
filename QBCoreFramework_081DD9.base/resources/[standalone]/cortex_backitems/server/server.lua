--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------
-- ## Don't touch this.
local backItems = {}

RegisterNetEvent('cortex_backitems:sv:AttachBackItems', function(obj)
    local src = source

    backItems[#backItems+1] = {
        obj = obj,
        player = tonumber(src)
    }
end)

RegisterNetEvent('cortex_backitems:sv:DeleteAttachedBackItems', function(src)
    if not src then
        src = source 
    end

    for i, v in pairs(backItems) do
        if tonumber(src) == v.player then
            local obj = NetworkGetEntityFromNetworkId(v.obj)

            if DoesEntityExist(obj) then
                DeleteEntity(obj)
            end

            backItems[i] = nil
        end
    end
end)
--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------

AddEventHandler('playerDropped', function()
    TriggerEvent('cortex_backitems:sv:DeleteAttachedBackItems', source)
end)