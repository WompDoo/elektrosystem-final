var scrollController = angular.module('scrollController', []);

scrollController.controller('scrollController', function ($scope, $location, $anchorScroll) {
    $scope.gotoTutvustus = function () {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('introductionM');

        // call $anchorScroll()
        $anchorScroll();
    };
    $scope.gotoForm = function () {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('contact');

        // call $anchorScroll()
        $anchorScroll();
    };

});