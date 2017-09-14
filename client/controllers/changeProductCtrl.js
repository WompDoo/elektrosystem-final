var changeProductCtrl = angular.module('changeProductCtrl', []);

changeProductCtrl.controller('changeProductCtrl', function($scope, productService, idService){
    var id = idService.getId();
    productService.getProductById(id).then(function(data){
        console.log(data);
        $scope.name = data.name;
        $scope.price = data.price;
        $scope.information = data.information;
    }, function(err){
        console.log(err);
    })
    $scope.saveProduct = function(){
        var name = "";
        var price = "";
        var information = "";
        if($scope.productForm.name === '{{name}}'){
            name = $scope.name;
        }else{
            name = $scope.productForm.name;
        }
        if($scope.productForm.price === '{{price}}'){
            price = $scope.price;
        }else{
            price = $scope.productForm.price;
        }
        if($scope.productForm.information === '{{information}}'){
            information = $scope.information;
        }else{
            information = $scope.productForm.information;
        }
        productService.updateProduct(id, name, price, information).then(function(data){
            console.log(data);
        }, function(err){
            console.log(err);
        })
    }

})
