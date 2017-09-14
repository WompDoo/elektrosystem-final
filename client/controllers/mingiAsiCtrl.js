var mingiAsiCtrl = angular.module('mingiAsiCtrl', ['pascalprecht.translate']);


mingiAsiCtrl.config(function ($translateProvider) {
    $translateProvider.translations('et', {
        EMAILERROR: 'Kõik väljad peavad olema täidetud',
        LANDINGTITLE1: 'Meie tehtud',
        LANDINGTITLE2: 'on kõrgusi ületavad',
        LANDINGMESSAGE: 'elektrilahendused',
        SIDEMENUHOME: 'Pealeht',
        SIDEMENUINTRO: 'Tutvustus',
        SIDEMENUCREW: 'Meeskond',
        SIDEMENUPROJECTS: 'Projektid',
        SIDEMENUPARTNERS: 'Partnerid',
        SIDEMENUCONTACT: 'Kontakt',
        LANDINGBUTTON1: 'Saada päring',
        LANDINGBUTTON2: 'Ettevõttest',

        INTROTEXT: 'Oleme tugev Eesti ettevõte, kes võtnud oma missiooniks lahendada kõik elektritöödega seotud ülesanded.Meie oskustepagas onaastatepikkuse kogemusetaustal arenenud japeensusteni lihvitud.',
        INTROSUBHEADING1: 'Elektritööd',
        INTROSUBHEADING2: 'Elektriklipide ehitus',
        INTROSUBHEADING3: 'Seadmete paigaldus',
        INTROSUBHEADING4: 'Projekteerimine',
        INTROSUBTEXT1: 'See on meie peamine tööpõld. Erinevad elektritööd on meie igapäevaseks töö osaks.',
        INTROSUBTEXT2: 'Omame pikaajalist kogemust elektrikilpide ehitusel ja remontimisel.',
        INTROSUBTEXT3: 'Meil on oskuslik tööjõud erinevate elektriseadmete installeerimiseks.',
        INTROSUBTEXT4: 'Oleme koostanud elektriprojekte juba ligi 25 aastat.',

        CREWTEXT: 'Ettevõtte võtmetegijad annavad asjalikku ja profesionaalset nõu ning meie tehtud tööd räägivad enda eest.',
        CREWPOS1: 'Juhataja',
        CREWPOS2: 'Projektijuhataja',
        CREWPOS3: 'Projektijuhataja',

        PROJECTSINSPECT: 'Vaata lähemalt',
        PROJECTSMORE: 'Järgmine',
        PROJECTSLESS: 'Eelmine',

        MAPEXTRA:'Avage google mapsis',
        CONTACTHEAD1: 'Soovite infot?',
        CONTACTHEAD2: 'Võtke meiega ühendust',
        CONTACTPHONE: 'Telefon',
        CONTACTEMAIL: 'E-mail',
        CONTACTADDRESS: 'Aadress',

        FORMNAME: 'Nimi',
        FORMEMAIL: 'E-mail aadress',
        FORMMESSAGE: 'Sõnum',

        et: 'Eesti',
        en: 'English',
        ru: 'Россия'
    })
        .translations('en', {
            EMAILERROR: 'All the fields need to be filled',
            LANDINGTITLE1: 'We take',
            LANDINGTITLE2: 'to new heights',
            LANDINGMESSAGE: 'electrical solutions',
            SIDEMENUHOME: 'Home',
            SIDEMENUINTRO: 'Introduction',
            SIDEMENUCREW: 'Team',
            SIDEMENUPROJECTS: 'Projects',
            SIDEMENUPARTNERS: 'Partners',
            SIDEMENUCONTACT: 'Contact',
            LANDINGBUTTON1: 'Enquiry',
            LANDINGBUTTON2: 'About the company',

            INTROTEXT: 'We are a strong Estonian company, which has taken on the task of solving all electrical work related tasks. Our fine knowledge of electrical work has been honed by years of experience.',
            INTROSUBHEADING1: 'Electrical work',
            INTROSUBHEADING2: 'Electric shield manufacturing',
            INTROSUBHEADING3: 'Installation',
            INTROSUBHEADING4: 'Planning',
            INTROSUBTEXT1: 'This is our main field. We are providing electrical works on a daily basis.',
            INTROSUBTEXT2: 'We have a long experience in building and fixing electrical shields.',
            INTROSUBTEXT3: 'The skilled workers are able to assist in installing different kinds of electrical appliances.',
            INTROSUBTEXT4: 'We have been composing electrical projects for almost 25 years.',

            CREWTEXT: 'The key players in the company provide efficient and professional advice, and the work we do talks for itself.',
            CREWPOS1: 'Manager',
            CREWPOS2: 'Project Manager',
            CREWPOS3: 'Project Manager',

            PROJECTSINSPECT: 'More info',
            PROJECTSMORE: 'Next',
            PROJECTSLESS: 'Previous',

            MAPEXTRA:'Open in google maps',
            CONTACTHEAD1: 'Want more information?',
            CONTACTHEAD2: 'Contact us',
            CONTACTPHONE: 'Phone',
            CONTACTEMAIL: 'E-mail',
            CONTACTADDRESS: 'Address',

            FORMNAME: 'Name',
            FORMEMAIL: 'E-mail address',
            FORMMESSAGE: 'Message',

            et: 'Eesti',
            en: 'English',
            ru: 'Россия'
        })

        .translations('ru', {
            EMAILERROR: 'All the fields need to be filled',
            LANDINGTITLE1: 'Осуществленные нами проекты',
            LANDINGTITLE2: 'превышают высоты',
            LANDINGMESSAGE: 'в сфере електричества',
            SIDEMENUHOME: 'Домашняя страница',
            SIDEMENUINTRO: 'Ознакомление',
            SIDEMENUCREW: 'Персонал',
            SIDEMENUPROJECTS: 'Проекты',
            SIDEMENUPARTNERS: 'Партнеры',
            SIDEMENUCONTACT: 'Контакт',
            LANDINGBUTTON1: 'Пришли запрос',
            LANDINGBUTTON2: 'О компании',

            INTROTEXT: 'Наш богаж умения и знаний  на фоне долголетнего опыта, развит и отшлифован до мелочей',
            INTROSUBHEADING1: 'Электрические работы',
            INTROSUBHEADING2: 'Собирание электпических щитов.',
            INTROSUBHEADING3: 'Установка приборов',
            INTROSUBHEADING4: 'Проектирование',
            INTROSUBTEXT1: 'Эта наша главная сфера деятельности, различные электрические работы-это наша повседневная работа.',
            INTROSUBTEXT2: 'Имеем долгосрочный опыт по собиранию и ремонту электрических щитов.',
            INTROSUBTEXT3: 'У нас опытный персонал по инсталяции различных электрических приборов',
            INTROSUBTEXT4: 'Составляем электрические проекты на пртяжении 25 лет',

            CREWTEXT: 'Ключевые деятели компании дают проффесиональные и дельные советы. Выполненые работы говорят сами за себя.',
            CREWPOS1: 'Руководитель',
            CREWPOS2: 'Руководитель проектов',
            CREWPOS3: 'Руководитель проектов',

            PROJECTSINSPECT: 'Смотри больше',
            PROJECTSMORE: 'Дальше',

            MAPEXTRA:'Открыть в google maps',
            CONTACTHEAD1: 'Желаете получить дополнительную информацию',
            CONTACTHEAD2: 'Связывайтесь с нами',
            CONTACTPHONE: 'Телефон',
            CONTACTEMAIL: 'Э-майл',
            CONTACTADDRESS: 'Адрес',

            FORMNAME: 'Имя',
            FORMEMAIL: 'Э-майл',
            FORMMESSAGE: 'Сообщение',

            et: 'Eesti',
            en: 'English',
            ru: 'Россия'
        });

    $translateProvider.preferredLanguage('et');
});

mingiAsiCtrl.controller('mingiAsiCtrl', function ($scope, $rootScope, $translate) {

    $rootScope.language = "et";

    $rootScope.lang = function (key) {
        $rootScope.language = (key);
        $translate.use(key);
        $rootScope.mMenu = false;
    };


});
