describe("A Salary Calculator", function(){
    var calculator = null;

    beforeEach(function(){
        calculator = new SalaryCalculator();
    });

    it("Should have the default salary to zero", function(){

        //Act
        var salary = calculator.get('salary');

        //Assert
        expect(salary).toBe(0);
    });

    it("Should be able to calculate the salary", function(){
        //Arrange
        calculator.set('basic',10000);
        calculator.set('hra',2000);
        calculator.set('da',3000);
        calculator.set('tax',10);

        var expectedSalary = 13500;

        //Act
        calculator.calculate();

        //Assert
        expect(calculator.get("salary")).toBe(expectedSalary);
    });

    it("Should trigger listeners when basic is changing", function(){
        //Arrange

        var listener = {
            basic : function (){
            }
        };

        spyOn(listener, "basic");
        calculator.addSubscriber("basic",listener.basic);

        //Act
        calculator.set("basic",10000);

        //Assert
        expect(listener.basic).toHaveBeenCalled();

    });
});
