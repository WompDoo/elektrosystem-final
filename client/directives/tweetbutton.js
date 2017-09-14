var tweetbutton = angular.module('tweetbutton', []);

tweetbutton.directive('tweetbutton', function($compile, $timeout){
    return{
        scope: {
            title: "@title",
            info : "@info",
            price: "@price",
            sumprice: "@sumprice",
            url: "@url"

        },
        templateUrl: 'partials/test.html',
        controller: function($scope, $timeout, $rootScope, dataService){
            $scope.counter = {
                value: 1,
            }
            $scope.testRootScope = function(){
                var TestItem = {};
                TestItem.name = $scope.title;
                TestItem.sum = $scope.sumprice;
                dataService.setData(TestItem);
                $scope.counter.value = 1;
                $scope.sumprice = $scope.price;
            }
            $scope.counterDivide = function(){
                if($scope.counter.value <= 0){
                    $scope.counter.value = 0;
                    $scope.sumprice = 0;
                }else{
                    $scope.counter.value = $scope.counter.value - 1;
                    $scope.sumprice = parseInt($scope.sumprice) - parseInt($scope.price);
                }



            }
            $scope.counterAdd = function(){

                $scope.counter.value = $scope.counter.value + 1;
                $scope.sumprice = parseInt($scope.sumprice) + parseInt($scope.price);
            }



        },
        link: function(scope, element, attrs){
            $timeout(function(){
                angular.element(angular.element(angular.element(element).parent().find('li')).find('a')).bind('click', function(){
                    var result = document.getElementsByClassName("bonkers");
                    angular.forEach(result, function(result){
                        angular.element(result).addClass("bonkers");
                    })
                    angular.element(angular.element(this).parent().parent().parent()).find('.bonkers').removeClass("bonkers");

                    if(element.hasClass("bonkers")){
                        element.removeClass("bonkers");
                    }
                })
            }, 500);
            angular.element(angular.element.find('.close--information')).bind('click', function(event){
                angular.element(angular.element(event.target).parent().parent().parent()).addClass("bonkers");
                var result = document.getElementsByClassName("bonkers");
                console.log(event.target);
            });
            /*angular.element(angular.element(element).parent().find('button')).bind('click', function(){
                if(element.hasClass("bonkers")){
                    element.removeClass("bonkers");
                }else{
                    element.addClass("bonkers");
                }
            })*/
        }
    }
});
