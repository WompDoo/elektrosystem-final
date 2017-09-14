var projectViewCtrl = angular.module('projectViewCtrl', []);

projectViewCtrl.controller('projectViewCtrl', function ($scope, $http, $location) {
    $http.get('testroot/test/allprojects').success(function (data) {
        $scope.projects = data;
    })
        .error(function (err) {
            console.log(err);
        })
    $scope.toProject = function (id) {
        $location.path('/admin/demopic/' + id);
    }
});
