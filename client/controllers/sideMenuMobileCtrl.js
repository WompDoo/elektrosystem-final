var sideMenuMobileCtrl = angular.module('sideMenuMobileCtrl', ['ngTouch']);


sideMenuMobileCtrl.controller('sideMenuMobileCtrl', function($scope){

    // Hide menu
    $scope.showMenu = false;
    // Links
    $scope.navigation = [{
        title: "Page A",
        href: "#pageA"
    }, {
        title: "Page B",
        href: "#pageB"
    }, {
        title: "Page C",
        href: "#pageC"
    }];

});
