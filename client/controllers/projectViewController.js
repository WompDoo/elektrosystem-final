var projectViewController = angular.module('projectViewController', []);

projectViewController.controller('projectViewController', function($rootScope, $scope){
    $scope.toggleProjectView = function(){
        $rootScope.projectview = true;
        $rootScope.projectViewOverlay = true;
    }
    $scope.hideProject = function(){
        $rootScope.projectview = false;
        $rootScope.projectViewOverlay = false;
    }

});
