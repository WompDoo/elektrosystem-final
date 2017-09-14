var projectPicturesController = angular.module('projectPicturesController', []);
projectPicturesController.controller('projectPicturesController', function projectPicturesController($scope) {

    $scope.projectImages = [
        {
            image: 'img/project1.jpeg', active: 'active', number: 0
        },
        {
            image: 'img/project5.jpeg', number: 1
        },
        {
            image: 'img/project6.jpeg', number: 2
        },
        {
            image: 'img/project7.jpeg', number: 3
        },
        {
            image: 'img/project1.jpeg', number: 4
        }

    ];
});

