var landingContactCtrl = angular.module('landingContactCtrl', []);

landingContactCtrl.controller('landingContactCtrl', function($scope, contactInfoService, $sce){
    contactInfoService.getContactInfo().then(function(data){
        $scope.info = $sce.trustAsHtml(data.info);
    }, function(err){
        console.log(err);
    })
});
