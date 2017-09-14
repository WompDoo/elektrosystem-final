var projectController = angular.module('projectController', ['ui.bootstrap']);
projectController.controller('projectController', function projectController($scope, $rootScope, $timeout) {

    $scope.nextButtonHidden = false;
    $scope.prevButtonHidden = true;

    $scope.projects = [
        {
            image: 'img/projectPics/Selver/Selver1.jpg',
        },
        {
            image: 'img/projectPics/EMU/emu2.jpg',
        },
        {
            image: 'img/projectPics/Vanemuine/vanemuineHead.jpg',
        },
        {
            image: 'img/projectPics/Bitestop/bite1.jpg',
        },
        {
            image: 'img/projectPics/Nordic/nordic3.jpg',
        },
        {
            image: 'img/projectPics/Intrac/intrac3.jpg',
        },
        {
            image: 'img/projectPics/Jakobi/Jakobi5.jpg',
        },
        {
            image: 'img/projectPics/Hotel/hotel5.jpg',
        }
    ];

    $scope.project = [
        {
            'ee': {
                name: 'Selverid',
                alapealkiri: 'Toidupoed',
                aasta: '2013-2015',
                tekst: "Oleme olnud tähtsaks osaks Eesti prestiižseima toidupoodide keti - Selveri arengus. Projekteeritud ja elekter on paigaldatud Aardla, Jaama, Jõgeva ja Vitamiini Selveritesse. Projektide toimumisaeg on jäänud vahemikku 2013-2016 aasta.",
                shortinfo: 'Oleme olnud tähtsaks osaks Eesti prestiižseima toidupoodide keti - Selveri arengus.',
                pictures: ["img/projectPics/Selver/Selver1.jpg", "img/projectPics/Selver/Selver2.jpg", "img/projectPics/Selver/Selver3.jpg"]

            },
            'en': {
                name: 'Selvers',
                alapealkiri: 'Grocery stores',
                aasta: '2013-2015',
                tekst: "We have been an important part of the development of Estonia's most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.",
                shortinfo: "We have been an important part of the development of Estonia's most prestigious grocery store chain.",
                pictures: ["img/projectPics/Selver/Selver1.jpg", "img/projectPics/Selver/Selver2.jpg", "img/projectPics/Selver/Selver3.jpg"]

            },
            'ru': {
                name: 'Сельверы',
                alapealkiri: 'продуктовые магазины',
                aasta: '2013-2015',
                tekst: "Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016",
                shortinfo: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
                pictures: ["img/projectPics/Selver/Selver1.jpg", "img/projectPics/Selver/Selver2.jpg", "img/projectPics/Selver/Selver3.jpg"]

            }
        },
        {
            'ee': {
                name: 'EMÜ spordihoone',
                alapealkiri: 'Spordikompleks Tartus',
                aasta: 2009,
                tekst: "Lõime koostöös YIT ehitusega valgus -ja elektrilahendused Lõuna-Eesti võimsaima spordikompleksi jaoks. Koguprojekti pikkus 2 aastat ja kasulikku pinda 1500m2; töö tellijaks oli Eesti Maaülikool; kompleks asub Kreutzwaldi tänav 3, Tartu linna ääres, otse Tallinnast sissesõidul.",
                shortinfo: 'Lõime koostöös YIT ehitusega valgus -ja elektrilahendused Lõuna-Eesti võimsaima spordikompleksi jaoks.',
                pictures: ["img/projectPics/EMU/emu1.jpg", "img/projectPics/EMU/emu2.jpg", "img/projectPics/EMU/emu3.jpg", "img/projectPics/EMU/emu4.jpg", "img/projectPics/EMU/emu5.jpg"]
            },
            'en': {
                name: 'EMÜ sports club',
                alapealkiri: 'Sports facility in Tartu',
                aasta: 2009,
                tekst: "In partnership with YIT construction company we executed the electical works for Southern Estonia's biggest sports facility. The project was done in 2 years, and it has an area of 1500 m2; The client was Estonian University of Life Sciences.",
                shortinfo: "In partnership with YIT construction company we executed the electical works for Southern Estonia's biggest sports facility.",
                pictures: ["img/projectPics/EMU/emu1.jpg", "img/projectPics/EMU/emu2.jpg", "img/projectPics/EMU/emu3.jpg", "img/projectPics/EMU/emu4.jpg", "img/projectPics/EMU/emu5.jpg"]
            },
            'ru': {
                name: 'EMÜ спортивное здание',
                alapealkiri: 'Спортивный комплекс в городе Тарту',
                aasta: 2009,
                tekst: "В сотрудничестве с YIT ehitusega фирмой установили световые и электрические решения в мощнейший спортивный комплекс южной Эстонии. Проект длился  2 года, общая площадь 1500 кв м, заказщик Eesti Maaülikool;  Kreutzwaldi улица 3, город Tartu",
                shortinfo: 'В сотрудничестве с YIT ehitusega фирмой установили световые и электрические решения в мощнейший спортивный комплекс южной Эстонии.',
                pictures: ["img/projectPics/EMU/emu1.jpg", "img/projectPics/EMU/emu2.jpg", "img/projectPics/EMU/emu3.jpg", "img/projectPics/EMU/emu4.jpg", "img/projectPics/EMU/emu5.jpg"]
            },

        },
        {
            'ee': {
                name: 'Teater Vanemuine',
                alapealkiri: 'lavatehnika elektripaigaldis',
                aasta: '2016-2017',
                tekst: "Koostöös Hollandi ettevõttega Trekwerk valmistasime 1,5 aasta jooksul eriilmelise lavatenika elektripaigaldise Vanemuise teatrile. Veelgi mahukam lahendus on 2008. aastal tehtud Ugala teatri jaoks. Oleme eriliselt uhked tugeva koostöö üle Euroopa partneriga ja oma panuse eest Eesti kultuuri arendamisse.",
                shortinfo: 'Koostöös Hollandi ettevõttega Trekwerk valmistasime 1,5 aasta jooksul eriilmelise lavatenika elektripaigaldise Vanemuise teatrile.',
                pictures: ["img/projectPics/Vanemuine/vanemuine1.jpg", "img/projectPics/Vanemuine/vanemuine2.jpg", "img/projectPics/Vanemuine/vanemuine3.jpg", "img/projectPics/Vanemuine/vanemuine4.jpg"]
            },
            'en': {
                name: 'Theater Vanemuine',
                alapealkiri: '',
                aasta: '2016-2017',
                tekst: "In partnership with Dutch company Trekwerk we built a stage technique facilities. We have also constructed a larger version for Ugala theatre, which was built already in 2008. We are certainly proud of the contribution that has been made to the benefit of Estonia's culture.",
                shortinfo: "In partnership with Dutch company Trekwerk we built a stage technique facilities.",
                pictures: ["img/projectPics/Vanemuine/vanemuine1.jpg", "img/projectPics/Vanemuine/vanemuine2.jpg", "img/projectPics/Vanemuine/vanemuine3.jpg", "img/projectPics/Vanemuine/vanemuine4.jpg"]
            },
            'ru': {
                name: 'Театр Vanemuine',
                alapealkiri: 'установка электричества и техники  на сцене',
                aasta: '2016-2017',
                tekst: "В сотрудничестве с голландской фирмой  в течении  1,5 лет изготовили и установили особую технику для сцены в театре  Vanemuine. Боллее мощный проект был осуществлен театре Угала",
                shortinfo: 'В сотрудничестве с голландской фирмой  в течении  1,5 лет изготовили и установили особую технику для сцены в театре  Vanemuine.',
                pictures: ["img/projectPics/Vanemuine/vanemuine1.jpg", "img/projectPics/Vanemuine/vanemuine2.jpg", "img/projectPics/Vanemuine/vanemuine3.jpg", "img/projectPics/Vanemuine/vanemuine4.jpg"]
            }

        },
        {
            'ee': {
                name: 'Bitestop',
                alapealkiri: 'Toitlustuskeskus',
                aasta: '2014',
                tekst: "Tegime elektrilahendused Tartus Ringtee tänaval asuvale roadstop tanklale. See tankla hõlmab endas ka söögikohta ja apteeki - väga Skandinaavialik ja mugav lahendus.",
                shortinfo: 'Tegime elektrilahendused Tartus Ringtee tänaval asuvale roadstop tanklale.',
                pictures: ["img/projectPics/Bitestop/bite1.jpg", "img/projectPics/Bitestop/bite2.jpg", "img/projectPics/Bitestop/bite3.jpg", "img/projectPics/Bitestop/bite4.jpg", "img/projectPics/Bitestop/bite5.jpg"]
            },
            'en': {
                name: 'Bitestop',
                alapealkiri: 'Grocery stores',
                aasta: '2014',
                tekst: "We built the electrical solutions for a roadstop gas station in Tartu, which includes a restaurant and a pharmacy.",
                shortinfo: "We built the electrical solutions for a roadstop gas station in Tartu, which includes a restaurant and a pharmacy..",
                pictures: ["img/projectPics/Bitestop/bite1.jpg", "img/projectPics/Bitestop/bite2.jpg", "img/projectPics/Bitestop/bite3.jpg", "img/projectPics/Bitestop/bite4.jpg", "img/projectPics/Bitestop/bite5.jpg"]
            },
            'ru': {
                name: 'Bitestop',
                alapealkiri: 'центр питания',
                aasta: '2014',
                tekst: "электрические решения были осуществлены на roadstop заправке на улице Рингтее в Тарту, которая объединяет аптеку и место питания.",
                shortinfo: 'электрические решения были осуществлены на roadstop заправке на улице Рингтее в Тарту, которая объединяет аптеку и место питания..',
                pictures: ["img/projectPics/Bitestop/bite1.jpg", "img/projectPics/Bitestop/bite2.jpg", "img/projectPics/Bitestop/bite3.jpg", "img/projectPics/Bitestop/bite4.jpg", "img/projectPics/Bitestop/bite5.jpg"]
            },

        },
        {
            'ee': {
                name: 'Nordic Digital',
                alapealkiri: 'Kontori -ja laopind',
                aasta: '2014',
                tekst: "Lõime Eesti juhtivale hulgimüügiettevõttele logistikakeskuse Tartu linna külje all. 1200 m2 ruutmeetril on ruumi rohkem kui 100le töötajale, kes koordineerivad Photopointi poodide tööd.",
                shortinfo: 'Lõime Eesti juhtivale hulgimüügiettevõttele logistikakeskuse Tartu linna külje all.',
                pictures: ["img/projectPics/Nordic/nordic1.jpg", "img/projectPics/Nordic/nordic2.png", "img/projectPics/Nordic/nordic3.jpg"]
            },
            'en': {
                name: 'Nordic Digital',
                alapealkiri: 'Office and warehouse',
                aasta: '2014',
                tekst: "For one of the leading wholesale operators in Estonia, we did electrical works for a new logistics center in Southern Estonia. 1200 m2 of area has the capacity for more than 100 people.",
                shortinfo: "For one of the leading wholesale operators in Estonia, we did electrical works for a new logistics center in Southern Estonia.",
                pictures: ["img/projectPics/Nordic/nordic1.jpg", "img/projectPics/Nordic/nordic2.png", "img/projectPics/Nordic/nordic3.jpg"]
            },
            'ru': {
                name: 'Nordic Digital',
                alapealkiri: 'Конторское и складное помещение',
                aasta: '2014',
                tekst: "создавали центр логиститки для ведущих оптовых предприятий Эстрнии, 1200 кв. Метра, на  100 рабочих мест, координация работы Photopoint магазинов",
                shortinfo: 'создавали центр логиститки для ведущих оптовых предприятий Эстрнии, 1200 кв.',
                pictures: ["img/projectPics/Nordic/nordic1.jpg", "img/projectPics/Nordic/nordic2.png", "img/projectPics/Nordic/nordic3.jpg"]
            },

        },
        {
            'ee': {
                name: 'Intrac Eesti',
                alapealkiri: 'äri -ja teenindushoone',
                aasta: '2013-2016',
                tekst: "Tegime elektritööd Intrac Eesti AS äri -ja teenindushoone jaoks. See tugev Eesti ettevõte, mis pakub põllumajandus -ja metsamasinate müüki ja hooldust, asutas lisaks Tallinna, Pärnu, Saaremaa ja Jõhvi teeninduskeskusele uue hoone Lõuna-Eesti klientidele lahenduste pakkumiseks.",
                shortinfo: 'Tegime elektritööd Intrac Eesti AS äri -ja teenindushoone jaoks.',
                pictures: ["img/projectPics/Intrac/intrac1.jpg", "img/projectPics/Intrac/intrac2.jpg", "img/projectPics/Intrac/intrac3.jpg"]
            },
            'en': {
                name: 'Intrac Estonia',
                alapealkiri: 'Office and service building',
                aasta: '2013-2016',
                tekst: "We excuted the electrical works for Intrac Estonia service center. The company deals in forest and agricultural machines and provides their service all over Sweden, Baltics and Poland.",
                shortinfo: "We excuted the electrical works for Intrac Estonia service center.",
                pictures: ["img/projectPics/Intrac/intrac1.jpg", "img/projectPics/Intrac/intrac2.jpg", "img/projectPics/Intrac/intrac3.jpg"]
            },
            'ru': {
                name: 'Intrac Eesti',
                alapealkiri: 'бизнес здание',
                aasta: '2013-2016',
                tekst: "Проделаны электрические работы в Intrac Eesti бизнес здании. Это крупное предприятие Эстонии по продаже и обслуживанию лесной и сельско-хозяйственной техники.",
                shortinfo: 'Проделаны электрические работы в Intrac Eesti бизнес здании.',
                pictures: ["img/projectPics/Intrac/intrac1.jpg", "img/projectPics/Intrac/intrac2.jpg", "img/projectPics/Intrac/intrac3.jpg"]
            },

        },
        {
            'ee': {
                name: 'Jakobi 25',
                alapealkiri: 'Korterelamu',
                aasta: '2013',
                tekst: "10 korteriga korterelamu tunnistati Tartu Linnavalitsuse poolt 2015 aasta parimaks ehitiseks ajaloolises piirkonnas ehitatud uute korterelamute kategoorias. Miljööväärtuslikus piirkonnas ehitatud hoones tegime elektrilahendused nii korteritele kui ka äripindadele.",
                shortinfo: "10 korteriga korterelamu tunnistati Tartu Linnavalitsuse poolt 2015 aasta parimaks ehitiseks ajaloolises piirkonnas ehitatud uute korterelamute kategoorias.",
                pictures: ["img/projectPics/Jakobi/Jakobi1.jpg", "img/projectPics/Jakobi/Jakobi2.jpg", "img/projectPics/Jakobi/Jakobi3.jpg", "img/projectPics/Jakobi/Jakobi4.jpg"]

            },
            'en': {
                name: 'Jakobi st 25',
                alapealkiri: 'apartment building',
                aasta: '2013',
                tekst: "This 10 apartment house was announced as a best new building established in a historical area by Tartu City Council in 2015. We built the electrical solutions for the flats and office spaces.",
                shortinfo: "This 10 apartment house was announced as a best new building established in a historical area by Tartu City Council in 2015.",
                pictures: ["img/projectPics/Jakobi/Jakobi1.jpg", "img/projectPics/Jakobi/Jakobi2.jpg", "img/projectPics/Jakobi/Jakobi3.jpg", "img/projectPics/Jakobi/Jakobi4.jpg"]
            },
            'ru': {
                name: 'Jakobi 25',
                alapealkiri: 'квартирное здание',
                aasta: '2013',
                tekst: "здание  с 10 квартирами признано горуправой в 2015 году лучшей новой постройкой в исторической части города Тарту.",
                shortinfo: 'здание  с 10 квартирами признано горуправой в 2015 году лучшей новой постройкой в исторической части города Тарту.',
                pictures: ["img/projectPics/Jakobi/Jakobi1.jpg", "img/projectPics/Jakobi/Jakobi2.jpg", "img/projectPics/Jakobi/Jakobi3.jpg", "img/projectPics/Jakobi/Jakobi4.jpg"]
            },

        },
        {
            'ee': {
                name: 'Hotell Tartu',
                alapealkiri: 'Juurdeehitus',
                aasta: '2016-2017',
                tekst: "Pikaaegsele Tartus asuvale hotellile tehtud juurdeehituse elektritööde eest vastutas meie meeskond. Tööde toimumise aeg 2016 - 2017 aasta.",
                shortinfo: 'Pikaaegsele Tartus asuvale hotellile tehtud juurdeehituse elektritööde eest vastutas meie meeskond.',
                pictures: ["img/projectPics/Hotel/hotel1.jpg", "img/projectPics/Hotel/hotel2.jpg", "img/projectPics/Hotel/hotel3.jpg", "img/projectPics/Hotel/hotel4.jpg", "img/projectPics/Hotel/hotel5.jpg"]
            },
            'en': {
                name: 'Hotel Tartu',
                alapealkiri: 'Extenison',
                aasta: '2016-2017',
                tekst: "For extensions to the hotel in the city center of Tartu, the electrical works were provided by our company. The works started in 2016 and ended in 2017.",
                shortinfo: "For extensions to the hotel in the city center of Tartu, the electrical works were provided by our company.",
                pictures: ["img/projectPics/Hotel/hotel1.jpg", "img/projectPics/Hotel/hotel2.jpg", "img/projectPics/Hotel/hotel3.jpg", "img/projectPics/Hotel/hotel4.jpg", "img/projectPics/Hotel/hotel5.jpg"]
            },
            'ru': {
                name: 'Отель Тарту',
                alapealkiri: 'пристройка',
                aasta: '2016-2017',
                tekst: "Наша команда отвечала за электрические работы пристройки отеля Тарту.",
                shortinfo: 'Наша команда отвечала за электрические работы пристройки отеля Тарту.',
                pictures: ["img/projectPics/Hotel/hotel1.jpg", "img/projectPics/Hotel/hotel2.jpg", "img/projectPics/Hotel/hotel3.jpg", "img/projectPics/Hotel/hotel4.jpg", "img/projectPics/Hotel/hotel5.jpg"]
            },

        }

    ];


    $rootScope.$watch('language', function () {

        $scope.projectNameList = [];
        $scope.projectSubList = [];
        $scope.projectYearList = [];
        $scope.projectShortList = [];

        if ($rootScope.language == "et") {
            for (i = 0; i < $scope.project.length; i++) {
                $scope.projectNameList.push($scope.project[i].ee.name);
                $scope.projectSubList.push($scope.project[i].ee.alapealkiri);
                $scope.projectYearList.push($scope.project[i].ee.aasta);
                $scope.projectShortList.push($scope.project[i].ee.shortinfo);
            }
            //$scope.projectName = $scope.project[index].ee.name;
        }
        else if ($rootScope.language == "en") {
            for (i = 0; i < $scope.project.length; i++) {
                $scope.projectNameList.push($scope.project[i].en.name);
                $scope.projectSubList.push($scope.project[i].en.alapealkiri);
                $scope.projectYearList.push($scope.project[i].en.aasta);
                $scope.projectShortList.push($scope.project[i].en.shortinfo);
            }
            //$scope.projectName = $scope.project.en.name;
        }
        else {
            for (i = 0; i < $scope.project.length; i++) {
                $scope.projectNameList.push($scope.project[i].ru.name);
                $scope.projectSubList.push($scope.project[i].ru.alapealkiri);
                $scope.projectYearList.push($scope.project[i].ru.aasta);
                $scope.projectShortList.push($scope.project[i].ru.shortinfo);
            }
            //$scope.projectName = $scope.project.ru.name;
        }
    }, true);




    $scope.toggleProjectView = function (index) {

        $rootScope.projectview = true;
        $rootScope.projectViewOverlay = true;
        $scope.globalPictures = $scope.projects[index].pictures;
        $scope.globalAasta = $scope.projects[index].aasta;
        $rootScope.index = index;


        $scope.$watch('$rootScope.language', function () {
            if ($rootScope.language == "et") {
                $scope.globalName = $scope.project[index].ee.name;
                $scope.globalAlapealkiri = $scope.project[index].ee.alapealkiri;
                $scope.globalTekst = $scope.project[index].ee.tekst;
                $scope.globalPictures = $scope.project[index].ee.pictures;
                $scope.globalAasta = $scope.project[index].ee.aasta;
            }
            else if ($rootScope.language == "en") {
                console.log('engli');
                $scope.globalName = $scope.project[index].en.name;
                $scope.globalAlapealkiri = $scope.project[index].en.alapealkiri;
                $scope.globalTekst = $scope.project[index].en.tekst;
            }
            else {
                console.log('rusi');
                $scope.globalName = $scope.project[index].ru.name;
                $scope.globalAlapealkiri = $scope.project[index].ru.alapealkiri;
                $scope.globalTekst = $scope.project[index].ru.tekst;
            }
        });

    };

    var index = 0;
    $scope.hideProject = function () {
        $rootScope.projectview = false;
        $rootScope.projectViewOverlay = false;
        index = 0;
        $scope.displayCard = 0;
        $scope.nextButtonHidden = false;
        $scope.prevButtonHidden = true;
    };

    $scope.displayCard = 0;

    $scope.prev = function(){
        $scope.toRight = true;
        $scope.toLeft = false;
        $scope.nextButtonHidden = false;

        $timeout(function(){
            $scope.displayCard -= 1;
            if($scope.displayCard == 0){
                $scope.prevButtonHidden = true;
            }
        }, 0);
    }

    $scope.next = function(){
        var length = $scope.project[$scope.index].ee.pictures.length;
        $scope.toLeft = true;
        $scope.toRight = false;
        $scope.prevButtonHidden = false;
        $timeout(function(){
            $scope.displayCard += 1;
            if($scope.displayCard == length - 1){
                $scope.nextButtonHidden = true;
            }
        }, 0);
    }

    $scope.menuUp = function(){
        $scope.index--;
        var length = $scope.project[$scope.index].ee.pictures.length;
        if($scope.index === 0){
            $scope.index = length-1;
        }
        if($rootScope.language === 'et'){
            $rootScope.holder = $scope.project[$scope.index].ee;
        }
        if($rootScope.language === 'en'){
            $rootScope.holder = $scope.project[$scope.index].en;
        }
        if($rootScope.language === 'ru'){
            $rootScope.holder = $scope.project[$scope.index].ru;
        }
        $scope.globalName = $rootScope.holder.name;
        $scope.globalAlapealkiri = $rootScope.holder.alapealkiri;
        $scope.globalAasta = $rootScope.holder.aasta;
        $scope.globalTekst = $rootScope.holder.tekst;
        $scope.globalPictures = $rootScope.holder.pictures;
    }
    $scope.menuDown = function () {
        console.log($scope.index);
        $scope.index++;
        var length = $scope.project[$scope.index].ee.pictures.length;
        if($scope.index === length-1){
            $scope.index = 0;
        }
        if($rootScope.language === 'et'){
            $rootScope.holder = $scope.project[$scope.index].ee;
        }
        if($rootScope.language === 'en'){
            $rootScope.holder = $scope.project[$scope.index].en;
        }
        if($rootScope.language === 'ru'){
            $rootScope.holder = $scope.project[$scope.index].ru;
        }
        $rootScope.projectview = true;
        $scope.globalName = $rootScope.holder.name;
        $scope.globalAlapealkiri = $rootScope.holder.alapealkiri;
        $scope.globalAasta = $rootScope.holder.aasta;
        $scope.globalTekst = $rootScope.holder.tekst;
        $scope.globalPictures = $rootScope.holder.pictures;

    }



        $scope.myHTML =
            'checked '
});
