describe("greetController", function(){

    beforeEach(module("myApp"));

    it("Should initialize name and greetMsg with empty strings", function(){

        var scope = {};

        inject(function($controller){
            $controller("greetController", {$scope : scope});
        });
        expect(scope.name).toBe('');
        expect(scope.greetMsg).toBe('');
    });

    it("Should generate a greet message when greeted", function(){

        var scope = {};
        var mockGreetService = {
            greet : function(){}
        }

        spyOn(mockGreetService, "greet");

        inject(function($controller){
            $controller("greetController", {$scope : scope, greetService : mockGreetService});
        });

        scope.name = "Magesh";
        scope.greet();

        expect(mockGreetService.greet).toHaveBeenCalledWith(scope.name);

    });
})
