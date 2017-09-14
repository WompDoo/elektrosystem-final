var addProductCtrl = angular.module('addProductCtrl', []);

addProductCtrl.controller('addProductCtrl', function($scope, productService, pictureService){
    var picture = "";
    $scope.message = false;

    $scope.filesChanged = function(elm){

        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            picture = file;
            elm.parentNode.parentNode.firstChild.nextSibling.style.backgroundImage="url("+file+")";
            elm.parentNode.parentNode.firstChild.nextSibling.style.border="none";
            console.log(elm.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling.style.display="none");

        }, function(err){
            console.log(err);
        })
    }

    $scope.addProduct = function(event){
        productService.addProduct($scope.productForm.name, $scope.productForm.price, $scope.productForm.information,$scope.productForm.quantity,$scope.productForm.serial, picture)
        .then(function(data){
            $scope.productForm = {};
            $scope.files = {};
            event.currentTarget.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.style.border="1px dashed #cccccc";
            event.currentTarget.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.style.backgroundImage="none";
            event.currentTarget.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.style.display="block";
        }, function(err){
            console.log(err);
            $scope.message = true;
            $scope.cbMessage =err;
            $scope.productForm = {};
        })
    }
})
