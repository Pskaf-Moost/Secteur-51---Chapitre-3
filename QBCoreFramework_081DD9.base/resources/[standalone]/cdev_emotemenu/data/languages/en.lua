if PublicSharedEmoteConfig.Language ~= "en" then 
    return
end

I18n = {
    -- 🐾 Emote Menu
    ["favorites"] = "Favorites",
    ["builtanimations"] = "Built Animations",
    ["sequences"] = "Sequences",
    ["stop"] = "Stop",
    ["search"] = "Search...",
    ["emotemenu"] = "EMOTE MENU",
    ["categories"] = "Categories",
    ["allAnimations"] = "All Animations",
    ["loadimageonhover"] = "Load Image on Hover",
    ["goback"] = "Go Back",

    -- 🎨 Animation Builder
    ["animationbuilder"] = "Animation Builder",
    ["saveanimation"] = "Save Animation",
    ["resetanimation"] = "Reset Animation",
    ["saveanimationdesc"] = "Enter a name for your animation",
    ["animationname"] = "Animation Name",

    -- 🔀 Sequence Creator
    ["sequencecreator"] = "Sequence Creator",
    ["createyoursequence"] = "Create Your Sequence",
    ["sequencecreatordesc"] = "Drag and drop the animations to create a custom sequence.",
    ["savesequence"] = "Save Sequence",
    ["clearsequence"] = "Clear Sequence",
    ["inseconds"] = "In Seconds",
    ["enteranameforyoursequence"] = "Enter a name for your Sequence",
    ["sequencename"] = "Sequence Name",

    -- 🤝 Synchronized Emotes
    ["synchronizedemotes"] = "Synchronized Emotes",
    ["firstperson"] = "First Person",
    ["noone"] = "No One",
    ["secondperson"] = "Second Person",
    ["warningme"] = "Warning: You need to select Yourself in one of the options",
    ["animation"] = "Animation:",
    ["synchronizedemotesdesc"] = "Select a partner to synchronize your emote, or do it by yourself",
    ["waitingon"] = "Waiting On",
    ["toacceptyourrequest"] = "To Accept your Request",
    ["hassentyouarequest"] = "Has Sent You a Request",
    ["youneedtobein"] = "You need to be in the Animation",
    ["youcantplaythisanimationwithped"] = "You can't play this animation with this ped",
    ["youtoofaraway"] = "You are too far away",
    ["requesttoofaraway"] = "Your Requester is too far away",
    ["accept"] = "Accept",
    ["me"] = "ME",
    ["decline"] = "Decline",
    ["request"] = "Request",

    -- 📍 Position Selector
    ["positionselector"] = "Position Selector",
    ["toofaraway"] = "You are too far away from the position",

    -- 🌐 Global 
    ["save"] = "Save",
    ["cancel"] = "Cancel",  
    ["drophere"] = "Drop Here",
        
    -- 🖱️ Context Menu *New
    ["setpos_playanim"] = 'Set Position & Play Animation',
    ["set_expression"] = 'Set Expression',
    ["set_walkstyle"] = 'Set Walkstyle',
    ["play_animation"] = 'Play Animation',
    ["addfav"] = 'Add to Favorites',
    ["removefav"] = 'Remove from Favorites',
    ["play_sequence"] = 'Play Sequence',
    ["setpos_playseq"] = 'Set Position & Play Sequence',
    ["remove_expression"] = 'Remove Expression',
    ["remove_walkstyle"] = 'Remove Walkstyle',
    ["remove_builtanim"] = 'Remove Built Animation',
    ["remove_sequence"] = 'Remove Sequence',
    ["open_request_modal"] = 'Open Request Modal',
    ["dev_find_offset"] = '[DEV TOOL] Find Offset',
    ["dev_record_anim_gif"] = '[DEV TOOL] Record Animation Gif (using cdev_medialib)',
    ["dev_record_category_gifs_skip"] = '[DEV TOOL] Record Category Gifs (using cdev_medialib) (Skip Existing)',
    ["dev_record_category_gifs"] = '[DEV TOOL] Record Category Gifs (using cdev_medialib)',
    ["setpos_open_request_modal"] = 'Set Position & Open Request Modal',
    ["set_idle_anim"] = 'Set Idle Animation',
}
