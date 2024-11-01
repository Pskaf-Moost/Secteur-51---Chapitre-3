PublicSharedEmoteConfig = {
    -- 👨‍💻 Dev Settings
    Debug = false,                 -- 🐞 Enable this for extra debug information
    DevTools = false,              -- 🛠️ Developer tools (useful for fine-tuning animations)

    -- 🛠️ General Settings
    Standalone = false,             -- 🏝️ Standalone mode (doesn't require cdev_lib, but disables some small features; these can still be manually adjusted in public/shared/api.lua)
    VersionCheck = true,           -- 🔄 Automatically checks for newer versions (recommended)    
    Language = "fr",               -- 🌐 Language setting (available: en, es, fr, de, pt, it; change in data/languages if necessary)
    cacheAnimationsOnStart = true, -- 🗃️ Cache all animations on script startup for smoother performance

    -- 👤 Virtual Ped Settings (Animation Builder)
    VirtualPed = {
        ScreenX = 450, -- 📍 X position of the virtual character on screen
        ScreenY = 900, -- 📍 Y position of the virtual character on screen

        ScreenX2560 = 500,     -- 📍 X position of the virtual character on screen
        ScreenY1440 = 1200,     -- 📍 Y position of the virtual character on screen

        depth = 3.0,   -- ⚙️ Depth of the virtual character (how far it appears)
        tickRate = 0   -- ⏲️ How often the virtual character updates (0 = no updates)
    },

    -- 🎛️ Default Emote Menu Settings
    DefaultSettings = {
        LoadImageOnHover = true, -- 🖱️ Load emote images when hovering over them
    },

    -- 💬 Player Commands for Emote Interactions
    Commands = {
        OpenEmoteMenu = "openEmoteMenu", -- 📜 Command to open the emote menu
        Emote = "e",                     -- 📜 Command to perform an emote
        PositionSelectEmote = "pse"      -- 📜 Command to position select emotes
    },

    -- 🛣️ Position Selector Settings for Emotes
    PositionSelector = {
        allowdistanceBetweenPlayerAndFinalCoords = 2.0, -- 🛣️ Maximum distance between player and final emote position
        raycastDistance = 20.0                          -- 🔭 Distance for raycast detection when placing emotes
    },

    -- 📜 Misc 
    checkifAnimationisRunningTick = 1000,     -- ⏲️ Time in milliseconds to check if animations are running
    RequestDistance = 5.0,                    -- 📏 Maximum distance to request an animation from another player
    ShowNameInRequest = false,                 -- 📏 Show player names in animation requests (change this in public/client/api.lua)
    onAnimationEndMaxDistanceToComeBackToPos = 2.0,    -- 📏 Max Distance to come back to the player after an animation ends

    -- 🖼️ Thumbnail URLs for Categories
    sequenceThumbnailUrl = "nui://cdev_emotemenu/data/categories/sequences.png",     -- 🖼️ URL for sequence thumbnails
    builtAnimationsUrl = "nui://cdev_emotemenu/data/categories/builtAnimations.png", -- 🖼️ URL for built-in animations

    -- 🐕 Addons
    Addons = {
        cdev_pets = true, -- 🐕 Enable animations related to cdev_pets (dogs, cats, etc.)
    },  

    -- 🛌 Idle Animations
    IdleAnimation = {
        enable = true,                    -- 🛌 Enable idle animations when standing still
        defaultidleanimationid = "idle2", -- 💤 Default idle animation to play
        idleTimeout = 5000,              -- ⏳ Time (in ms) before idle animation starts
        idleTick = 1000,                  -- ⏲️ How often (in ms) the idle animation is checked
        usingInitializeExport = false     -- 📦 Use Initialize export (for external control)
        -- exports("BlockIdleAnimation", function() ... )
        -- exports("UnblockIdleAnimation", function() ... )
    },

    -- 🐾 Ped Models for Dogs and Cats
    PedsTypes = {
        bigdogs = { -- 🐕 Big dog models
            'A_C_Chop', 'A_C_Chop_02', 'A_C_Husky', 'A_C_Retriever',
            'A_C_Rottweiler', 'A_C_shepherd', 'A_C_Westy',
            'cdev_dog_rott', 'cdev_dog_dobb', 'cdev_dog_golden',
            'cdev_dog_husky', 'cdev_dog_bully', 'cdev_dog_pitt',
            'cdev_dog_shep', 'cdev_dog_chow', 'cdev_dog_dal', 'cdev_dog_mal'
        },
        smalldogs = { -- 🐩 Small dog models
            'A_C_Poodle', 'cdev_dog_frbull', 'cdev_dog_minipitt',
            'A_C_Pug', 'A_C_Pug_02'
        },
        cats = { -- 🐈 Cat models
            'cdev_cat_turk', 'cdev_cat_amer'
        }
    },

    -- ⌨️ Default Keybinds
    DefaultKeybinds = {
        openAnimationMenu = { -- 📜 Open the emote menu
            key = "U", type = "keyboard", label = "Open Animation Menu"
        },
        cancelAnim = { -- 📜 Cancel the current animation
            key = "X", type = "keyboard", label = "Cancel Animation"
        },
        startListeningForFastAnimations = { -- 📜 Start fast animations
            key = "LSHIFT", type = "keyboard", label = "Start Fast Animations"
        },
        cancelIdleFront = { -- 📜 Cancel idle (move forward)
            key = "W", type = "keyboard", label = "Cancel Idle Front"
        },
        cancelIdleBack = { -- 📜 Cancel idle (move back)
            key = "S", type = "keyboard", label = "Cancel Idle Back"
        },
        cancelIdleLeft = { -- 📜 Cancel idle (move left)
            key = "A", type = "keyboard", label = "Cancel Idle Left"
        },
        cancelIdleRight = { -- 📜 Cancel idle (move right)
            key = "D", type = "keyboard", label = "Cancel Idle Right"
        },
        ptfxPlay = { -- 📜 Play particle effect for emote
            key = "E", type = "keyboard", label = "Play Emote Particle Effect"
        },
        cancelRequestAnim = { -- 📜 Cancel animation request
            key = "G", type = "keyboard", label = "Cancel Animation Request"
        },
        acceptRequestAnim = { -- 📜 Accept animation request
            key = "K", type = "keyboard", label = "Accept Animation Request"
        },

        -- 👨‍💻 Developer Keybinds (DevTools Enabled)
        changeNUIFocus = { -- 📜 Change NUI focus (for offset finder)
            key = "LMENU", type = "keyboard", label = "Change NUI Focus"
        }
    }
}
