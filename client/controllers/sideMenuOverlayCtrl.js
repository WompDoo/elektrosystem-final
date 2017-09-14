var sideMenuOverlayCtrl = angular.module('sideMenuOverlayCtrl', []);

sideMenuOverlayCtrl.controller('sideMenuOverlayCtrl', function($rootScope, $scope){
    $scope.hideOverlay = function(){
        $rootScope.sidemenu = false;
        $rootScope.sidemenuOverlay = false;
    }
})
