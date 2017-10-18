var projectService = angular.module('projectService', []);

projectService.factory('projectService', function($q, $timeout, $http){
    function getProjects(){
        var d = $q.defer();
        $http.get('/test/getallProjects')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject();
        })
        return d.promise;
    }
    function getProjectById(id){
        var d = $q.defer();
        $http.get('test/project/' + id)
            .success(function(data){
                d.resolve(data);
            }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function updateProject(column, value, id){
        var d = $q.defer();
        console.dir(id);
        $http.post('test/project/update/' + id, {
            column: column,
            value: value
        }).success(function(data){
                d.resolve(data);
            }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }

    return({
        getProjects: getProjects,
        getProjectById: getProjectById,
        updateProject: updateProject
    })
})
