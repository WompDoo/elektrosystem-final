var mMenuCtrl = angular.module('mMenuCtrl', []);

mMenuCtrl.controller('mMenuCtrl', function($rootScope, $scope, dataService){
    $scope.toggleMmenu = function(){
        $rootScope.mMenu = true;

    }

    $scope.hideMmenu = function(){
        $rootScope.mMenu = false;
    }
});
