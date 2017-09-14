var productService = angular.module('productService', []);

productService.factory('productService', function($q, $timeout, $http){
    function getProducts(){
        var d = $q.defer();
        $http.get('/products/all')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject();
        })
        return d.promise;
    }
    function addProduct(name, price, info, quantity, serial,picture){
        var d = $q.defer();
        $http.post('products/add', {name:name, price:price, information:info,quantity:quantity, serial:serial, picture:picture})
        .success(function(data, status){
            if(status === 200 && data.status){
                d.resolve(data);
            }else{
                d.reject(data);
            }
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getProductById(id){
        var d = $q.defer();
        $http.get('products/product/' + id)
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function updateProduct(id, name, price, information){
        console.log(id);
        console.log(name);
        console.log(price);
        console.log(information);
        var d = $q.defer();
        $http.post('products/update', {id:id, name:name, price:price, information: information})
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.resolve(err);
        })
        return d.promise;
    }
    return({
        addProduct:addProduct,
        getProducts: getProducts,
        getProductById: getProductById,
        updateProduct: updateProduct
    })
})
