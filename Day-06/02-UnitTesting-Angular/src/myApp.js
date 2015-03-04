var myApp = angular.module("myApp",[]);
myApp.factory("greetService", function(){
    return {
        greet : function(name){
            return "Hi " + name + ", Have a nice day!";
        }
    }
});
myApp.controller("greetController", function($scope, greetService){
    $scope.name = "";
    $scope.greetMsg = "";
    $scope.greet = function(){
        $scope.greetMsg = greetService.greet($scope.name);
    }
});
