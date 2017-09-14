var demoCtrl = angular.module('demoCtrl', []);
demoCtrl.controller('demoCtrl', function ($scope, demoService, $rootScope) {



    $scope.showLanding = false;
    $scope.toggleShowLanding = function()
    {
        $scope.showLanding = !$scope.showLanding;
    }

    demoService.getAll().then(function (data) {
        $scope.projectArray = data;
    })


    $rootScope.$watch('language', function () {

        if ($rootScope.language == "et") {
            demoService.getOneEst().then(function (data) {
                $scope.oneArray = data;
            })
        }
        else if ($rootScope.language == "en") {
            demoService.getOneEng().then(function (data) {
                $scope.oneArray = data;
            })
        }
        else {
            demoService.getOneRus().then(function (data) {
                $scope.oneArray = data;
            })
        }
    }, true);

    $scope.updateFieldContent = function(dbName, model){
        demoService.updateBlur(dbName, model, $rootScope.language).then(function(data){
            console.log(data);
        }, function(err){
            console.log(err);
        })
    }




});

