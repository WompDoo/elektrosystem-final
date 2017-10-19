var landingContactCtrl = angular.module('landingContactCtrl', []);

landingContactCtrl.controller('landingContactCtrl', function($scope, emailService){

    console.dir("landing ctrl");

    $scope.send = function(){
        console.dir("sending..");

        emailService.sendEmail($scope.sendEmailForm.name, $scope.sendEmailForm.email, $scope.sendEmailForm.text).then(function(data){
            console.log(data);
            $scope.sendEmailForm = {};
        })
    }

});
