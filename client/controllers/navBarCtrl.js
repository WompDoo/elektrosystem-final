var navBarCtrl = angular.module('navBarCtrl', ['ngAnimate']);

navBarCtrl.controller('navBarCtrl', function($rootScope, $scope, dataService){
    $scope.toggleSideMenu = function(){
        $rootScope.sidemenu = true;
        $rootScope.sidemenuOverlay = true;
        $rootScope.mingiasi = true;


    }
    $scope.alpha = false;
});
