var editProjectCtrl = angular.module('editProjectCtrl', []);
editProjectCtrl.controller('editProjectCtrl', function ($scope, $rootScope, projectService) {

    setTimeout(function () {
        var url = window.location.href;
        console.dir(url);
        $scope.id = url.split("/").pop();

        projectService.getProjectById($scope.id).then(function (data) {
            $scope.project = data;
        });
    }, 100);

    $scope.language = 'et';
    $rootScope.$watch('language', function () {
        $scope.language = $rootScope.language;

    }, true);

    $scope.updateFieldContent = function(column, value){
        projectService.updateProject(column, value, $scope.id).then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err)
        })
    }




});

