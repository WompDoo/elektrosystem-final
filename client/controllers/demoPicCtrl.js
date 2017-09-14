var demoPicCtrl = angular.module('demoPicCtrl', []);

demoPicCtrl.controller('demoPicCtrl', function ($scope, $http, Upload) {
    $scope.pildidOnOlemas = false;
    var id = window.location.hash.split('/')[3];
    $http.get('testroot/test/projectbyid/' + id).success(function (data) {
        console.log(data);
        $scope.estName = data.ee.name;
        $scope.estCat = data.ee.category;
        $scope.estDesc = data.ee.description;

        $scope.engName = data.en.name;
        $scope.engCat = data.en.category;
        $scope.engDesc = data.en.description;

        $scope.rusName = data.ru.name;
        $scope.rusCat = data.ru.category;
        $scope.rusDesc = data.ru.description;

        $scope.year = data.years;
    }).error(function (err) {
        console.log(err);
    });


    $scope.uploadFiles = function (images) {
        $scope.files = images;
        var data = {
            images: images
        }
        console.log(data);
        if (images) {
            Upload.upload({
                url: 'testroot/test/demoPic',
                arrayKey: '',
                data1: data
            }).then(function (data) {
                console.log(data);
                $scope.pildidOnOlemas = true;
                $scope.images = data.data;
                console.log(data.data);
            }, function (err) {
                console.log(err);
            })
        }
    }
});
