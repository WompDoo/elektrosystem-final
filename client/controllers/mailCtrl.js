var mailCtrl = angular.module('mailCtrl', []);

mailCtrl.controller('mailCtrl', function($scope, emailService, $rootScope){
    $scope.errorMsg = false;
    $scope.submitForm = function(isValid){

        if(isValid){
            $scope.errorMsg = false;
            console.log($scope.emailForm);
            emailService.sendEmail($scope.emailForm.name, $scope.emailForm.email, $scope.emailForm.text, $rootScope.language).then(function(data){
                console.log(data);
                $scope.emailForm.$setPrestine();
                $scope.emailForm = {};

            })
        }else{
            $scope.errorMsg = true;
        }
    }
})
