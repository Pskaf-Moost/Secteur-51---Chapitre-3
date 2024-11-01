fx_version 'cerulean'

game "gta5"

author 'cDev'
description 'Emote Menu Standalone System'
version '1.0.6'

lua54 'yes'

ui_page 'html/index.html'

shared_script {
  'public/shared/Config.lua',
  'public/shared/Animations.lua',
  'public/shared/Categories.lua',
  'public/shared/Expressions.lua',
  'public/shared/WalkStyles.lua',
  'public/shared/api.lua',
  "data/languages/**.lua",
  "shared/utils.lua",
}

client_script {
  "utils/**",

  'public/client/api.lua',
  'client/classes/**',  

  -- always load core last
  'client/core.lua',
}

server_script {
  "utils/**",

  'public/server/api.lua',
  'server/classes/**',

  -- always load core last
  'server/core.lua',
}

files {
  'html/**',
  'data/previews/**',
  'data/categories/**'
}

escrow_ignore {
  'public/**',
  'data/**'
}
dependency '/assetpacks'