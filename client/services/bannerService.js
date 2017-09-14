var bannerService = angular.module('bannerService', []);

bannerService.factory('bannerService', function($q, $timeout, $http){
    function getBanner(){
        var d = $q.defer();
        $http.get('/bannertext/all')
            .success(function(data){
                d.resolve(data);
            }).error(function(err){
            d.reject();
        })
        return d.promise;
    }
    /*function updateBanner(id, name){
        var d = $q.defer();
        $http.post('bannertext/update', {id:id, name:name})
            .success(function(data){
                d.resolve(data);
            }).error(function(err){
            d.resolve(err);
        })
        return d.promise;
    }*/
    return({
        getBanner: getBanner/*,
        updateBanner: updateBanner*/
    })
});
