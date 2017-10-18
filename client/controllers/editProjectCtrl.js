var editProjectCtrl = angular.module('editProjectCtrl', []);
editProjectCtrl.controller('editProjectCtrl', function ($scope, $rootScope, projectService, pictureService) {

    setTimeout(function () {
        var url = window.location.href;
        console.dir(url);
        $scope.id = url.split("/").pop();

        projectService.getProjectById($scope.id).then(function (data) {
            $scope.project = data;
        });
    }, 100);

    $scope.language = 'et';
    $rootScope.$watch('language', function () {
        $scope.language = $rootScope.language;

    }, true);

    $scope.updateFieldContent = function(column, value){
        projectService.updateProject(column, value, $scope.id).then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err)
        })
    }

    $scope.filesChanged = function(elm){
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            var fd = new FormData();
            fd.append('file', file);
            pictureService.saveImage(fd).then(function(file){
                $scope.project.pictures.push(file);
                $scope.updateFieldContent('pictures', $scope.project.pictures);
            }, function(err){
            })
        })
    }

    $scope.deleteImage = function(image) {
        var index = $scope.project.pictures.indexOf(image);
        if (index > -1) {
            $scope.project.pictures.splice(index, 1);
            $scope.updateFieldContent('pictures', $scope.project.pictures);
        }
    }

    $scope.onDropComplete = function (index, obj, evt) {
        var otherObj = $scope.project.pictures[index];
        var otherIndex = $scope.project.pictures.indexOf(obj);
        $scope.project.pictures[index] = obj;
        $scope.project.pictures[otherIndex] = otherObj;

        $scope.updateFieldContent('pictures', $scope.project.pictures);
    }



});

