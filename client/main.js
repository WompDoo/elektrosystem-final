var myApp = angular.module('myApp', [
    'ui.router',
    'ngAnimate',
    'addProductCtrl',
    'pictureService',
    'slick',
    'productService',
    'productCtrl',
    'allProductsCtrl',
    'mingiAsiCtrl',
    'anchorCtrl',
    'testtest',
    'projectController',
    'projectViewController',
    'projectPicturesController',
    'idService',
    'changeProductCtrl',
    'ngInitial',
    'sideMenuCtrl',
    'navBarCtrl',
    'sideMenuOverlayCtrl',
    'scrollController',
    'scrollOnClick',
    'CarouselDemoCtrl',
    'scrollToBookmark',
    'introSelect',
    'xeditable',
    'TextBtnCtrl',
    'ngSanitize',
    'textAngular',
    'contactInfoService',
    'mapCtrl',
    'mMenuCtrl',
    'landingContactCtrl',
    'addInfo',
    'landingProducts',
    'productElement',
    'premierController',
    'demoCtrl',
    'demoService',
    'tweetbutton',
    'dataService',
    'mailCtrl',
    'emailService'

]);



myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: 'partials/landing.html',
            controller: 'productCtrl',
            access: {restricted: false}
        })
        .state('admin', {
            abstract: true,
            url: '/admin',
            templateUrl: 'partials/admin.html',
            access: {restricted: false}
        })
        .state('admin.dashboard', {
            url: '/dashboard',
            templateUrl: 'partials/dashboard.html',
            access: {restricted: false}
        })
        .state('admin.projects', {
            url: '/projects',
            templateUrl: 'partials/projects.html',
            access: {restricted: false}
        })
        .state('admin.project', {
            url: '/project/:projectID',
            templateUrl: 'partials/project.html',
            access: {restricted: false}
        })
        .state('admin.demo', {
            url: '/demo',
            controller: 'demoCtrl',
            templateUrl: 'partials/demo.html',
            access: {restricted: false}
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'loginController',
            access: {restricted: false}
        })
        .state('logout', {
            url: '/logout',
            controller: 'logoutController',
            access: {restricted: false}
        })
        .state('register', {
            url: '/register',
            templateUrl: 'partials/register.html',
            controller: 'registerController',
            access: {restricted: false}
        })
        .state('two', {
            url: '/two',
            template: '<h1>This is page two!</h1>',
            access: {restricted: false}
        })
        .state('admin.addproduct', {
            url: '/addproduct',
            templateUrl: 'partials/add-product.html',
            controller: 'addProductCtrl',
            access: {restricted: false}
        })
        .state('products', {
            url: '/products',
            templateUrl: 'partials/products.html',
            access: {restricted: false}
        })
        .state('change', {
            url: '/change',
            templateUrl: 'partials/change-product.html',
            controller: 'changeProductCtrl',
            access: {restricted: false}
        })
        .state('changeContact', {
            url: '/change/contact',
            templateUrl: 'partials/change-contact-info.html',
            controller: 'contactCtrl',
            access: {restricted: false}
        })
        .state('createContact', {
            url: '/create/contact',
            templateUrl: 'partials/create-contact.html',
            controller: 'addInfo',
            access: {restricted: false}
        })
    $urlRouterProvider.otherwise('/');
});

myApp.run(function ($rootScope, $location, $state, AuthService, $window) {

    $window.ga('create', 'UA-105086894-1', 'auto');
    $rootScope.$on('$stateChangeSuccess', function(event){
        $window.ga('send', 'pageview', $location.path());
    })

    $rootScope.sidemenu = false;
    $rootScope.sidemenuOverlay = false;
    $rootScope.items = [];
    $rootScope.$on('$stateChangeStart',
        function (event, next, current) {
            AuthService.getUserStatus()
                .then(function () {
                    if (next.access.restricted && !AuthService.isLoggedIn()) {
                        $location.path('/login');

                    }
                });
        });
});

myApp.run(['$anchorScroll', function ($anchorScroll) {
    $anchorScroll.yOffset = 0;   // always scroll by 50 extra pixels
}])
