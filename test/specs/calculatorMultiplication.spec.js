const Calculator = require('../../app/calculator.js');
const { expect } = require('chai');

describe('calculatorMultiplication', function() {
    let validator;

    beforeEach(() => {
        validator = new Calculator();
    });

    afterEach(() => {
        validator = null;
    });

    it('should return 0 if array is empty', function() {
        expect(validator.multiply()).to.be.equal(0);
    });

    it('should return 0 when at least one of values is zero - [4, 0, 1]', function() {
        expect(validator.multiply(4, 0, 1)).to.be.equal(0);
    });

    it('should return 1 when called with number [1]', function() {
        expect(validator.multiply(1)).to.be.equal(1);
    });

    it('should return -50 when called with numbers [-1, -5, -10]', function() {
        expect(validator.multiply(-1, -5, -10)).to.be.equal(-50);
    });

    it('should return 84530940 when called with numbers [101, 87, 9620]', function() {
        expect(validator.multiply(101, 87, 9620)).to.be.equal(84530940);
    });

    it('should return -2 when called with numbers [-1, 2]', function() {
        expect(validator.multiply(-1,2)).to.be.equal(-2);
    });

    it('should return -0.1004108 when called with numbers [0.2, -0.7, 0.14, 5.123]', function() {
        expect(validator.multiply(0.2, -0.7, 0.14, 5.123)).to.be.equal(-0.1004108);
    });

    it('should throw an error if some value is not a number. Values are [1, a, "3"]', function() {
        expect(() => validator.multiply(1, "a", "3")).to.throw("Array contains non-numeric values - [number,string,string]");
    });
})