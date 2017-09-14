var premierController = angular.module('premierController', []);

premierController.controller('premierController', function($scope, productService, $rootScope){
    $rootScope.count = 0;
    $scope.counter = {
        value: 0
    };
    $scope.productDetail = true;
    var element = angular.element(document.querySelector('.overlay--product'));
    productService.getProducts().then(function(data){
        $scope.products = data;
        console.log(data);
        var chunk = function(arr, size){
            var newArr = [];
            for(var i = 0; i < arr.length; i += size){
                newArr.push(arr.slice(i, i+size));
            }
            return newArr;
        }
        $scope.array = chunk(data, 4);

    }, function(error){
        console.log(error);
    });

    productService.getProducts().then(function(data){
        $scope.data = data;
    }, function(err){
        console.log(err);
    })
    $scope.validateClick = function(id){
        productService.getProductById(id).then(function(data){
            console.log(data);
            $scope.title = data.name;
            $scope.info = data.information;
            $scope.price = data.price;
            $scope.url = data.picture;
            $scope.sumprice = data.price;
        }, function(err){
            console.log(err);
        })
    }
})
