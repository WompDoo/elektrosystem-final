var emailService = angular.module('emailService', []);

emailService.factory('emailService', function($q, $http){
    function sendEmail(name, email, text, lang) {
         var d = $q.defer();
         $http.post('/testroot/email', {
            name: name,
            email: email,
            text: text,
            lang: lang
         })
         .success(function (data) {
             d.resolve(data);
         })
         .error(function (err) {
             d.reject(err);
         })
             return d.promise;
     }
    return{
        sendEmail: sendEmail
    }
})
