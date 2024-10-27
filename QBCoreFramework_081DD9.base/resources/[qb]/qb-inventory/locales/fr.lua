local Translations = {
    progress = {
        ['snowballs'] = 'Ramassage de boules de neige..',
    },
    notify = {
        ['failed'] = 'Échec',
        ['canceled'] = 'Annulé',
        ['vlocked'] = 'Véhicule verrouillé',
        ['notowned'] = 'Vous ne possédez pas cet objet !',
        ['missitem'] = 'Vous n\'avez pas cet objet !',
        ['nonb'] = 'Personne à proximité !',
        ['noaccess'] = 'Inaccessible',
        ['nosell'] = 'Vous ne pouvez pas vendre cet objet..',
        ['itemexist'] = 'L\'objet n\'existe pas',
        ['notencash'] = 'Vous n\'avez pas assez d\'argent..',
        ['noitem'] = 'Vous n\'avez pas les bons objets..',
        ['gsitem'] = 'Vous ne pouvez pas vous donner un objet ?',
        ['tftgitem'] = 'Vous êtes trop loin pour donner des objets !',
        ['infound'] = 'L\'objet que vous avez essayé de donner est introuvable !',
        ['iifound'] = 'Objet incorrect trouvé, réessayez !',
        ['gitemrec'] = 'Vous avez reçu ',
        ['gitemfrom'] = ' De ',
        ['gitemyg'] = 'Vous avez donné ',
        ['gitinvfull'] = 'L\'inventaire de l\'autre joueur est plein !',
        ['giymif'] = 'Votre inventaire est plein !',
        ['gitydhei'] = 'Vous n\'avez pas assez de cet objet',
        ['gitydhitt'] = 'Vous n\'avez pas assez d\'objets à transférer',
        ['navt'] = 'Type non valide..',
        ['anfoc'] = 'Arguments incorrects..',
        ['yhg'] = 'Vous avez donné ',
        ['cgitem'] = 'Impossible de donner l\'objet !',
        ['idne'] = 'L\'objet n\'existe pas',
        ['pdne'] = 'Le joueur n\'est pas en ligne',
    },
    inf_mapping = {
        ['opn_inv'] = 'Ouvrir l\'inventaire',
        ['tog_slots'] = 'Basculer les emplacements de raccourcis',
        ['use_item'] = 'Utiliser l\'objet dans l\'emplacement ',
    },
    menu = {
        ['vending'] = 'Distributeur automatique',
        ['bin'] = 'Ouvrir la poubelle',
        ['craft'] = 'Fabriquer',
        ['o_bag'] = 'Ouvrir le sac',
    },
    interaction = {
        ['craft'] = '~g~E~w~ - Fabriquer',
    },
}

if GetConvar('qb_locale', 'en') == 'fr' then
    Lang = Locale:new({
        phrases = Translations,
        warnOnMissing = true,
        fallbackLang = Lang,
    })
end
