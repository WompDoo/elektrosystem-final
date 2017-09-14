var CarouselDemoCtrl = angular.module('CarouselDemoCtrl', ['ui.bootstrap']);
CarouselDemoCtrl.controller('CarouselDemoCtrl', function CarouselDemoCtrl($scope) {

    $scope.slides = [
        {
            image: 'img/Embach.svg', link: 'http://www.embach.ee'
        },
        {
            image: 'img/Nordecon.png', link: 'http://www.nordecon.com'
        },
        {
            image: 'img/Yit.png', link: 'https://www.yit.ee/avaleht'
        },
        {
            image: 'img/Ehitustrust.png', link: 'http://ehitustrust.ee'
        },
        {
            image: 'img/KRC.png', link: 'http://www.krc.ee'
        },
        {
            image: 'img/deckol.png', link: 'http://www.deckol.ee'
        },
        {
            image: 'img/Ramm.png', link: 'https://www.rammehitus.ee'
        },
        {
            image: 'img/Eston.png', link: 'http://eston.nordecon.com'
        },
        {
            image: 'img/OmaEhitaja.png', link: 'http://www.oma.ee'
        },
        {
            image: 'img/Trekwerk.png', link: 'http://www.trekwerk.com'
        },
        {
            image: 'img/Mapri.png', link: 'http://mapri.eu'
        },
        {
            image: 'img/Fausto.png', link: 'http://www.fausto.ee/et/'
        }

    ];
});

