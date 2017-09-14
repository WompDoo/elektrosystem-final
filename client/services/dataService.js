var dataService = angular.module('dataService', []);

dataService.service('dataService', function(){
    var data = [];
    return{
        getData: getData,
        setData: setData
    }
    function setData(list){
        data.push(list);
    }
    function getData(){
        return data;
    }
})
