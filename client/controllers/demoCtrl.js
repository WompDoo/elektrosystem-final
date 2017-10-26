var demoCtrl = angular.module('demoCtrl', []);
demoCtrl.controller('demoCtrl', function ($scope, demoService, $rootScope) {

    $scope.imagePath = '../img/est-logo.svg';

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
                $scope.mail = data.MAIL.replace('info@elektrosystem.ee', '<a href="mailto:info@elektrosystem.ee">info@elektrosystem.ee</a>');
            })
            $scope.imagePath = '../img/est-logo.svg';
        }
        else if ($rootScope.language == "en") {
            demoService.getOneEng().then(function (data) {
                $scope.oneArray = data;
            })
            $scope.imagePath = '../img/logo.svg';
        }
        else {
            demoService.getOneRus().then(function (data) {
                $scope.oneArray = data;
            })
            $scope.imagePath = '../img/logo.svg';
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

