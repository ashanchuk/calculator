const Calculator = require('../../app/calculator.js');
const { expect } = require('chai');

describe('calculatorAdd', function() {
    let validator;

    beforeEach(() => {
        validator = new Calculator();
    });

    afterEach(() => {
        validator = null;
    });

    it ('should return 0 if array is empty', function() {
        expect(validator.add()).to.be.equal(0);
    });

    it ('should return 0 when called with numbers [-1, 0, 1]', function() {
        expect(validator.add(-1, 0, 1)).to.be.equal(0);
    });

    it ('should return 0 when each values is 0 - [0, 0, 0, 0, 0]', function() {
        expect(validator.add(0, 0, 0, 0, 0)).to.be.equal(0);
    });

    it('should return 0.1 when called with numbers [-0.1, 0.2]', function() {
        expect(validator.add(-0.1, 0.2)).to.be.equal(0.1);
    });

    it('should return -5000 when called with numbers [-1500, -2300, -1200]', function() {
        expect(validator.add(-1500, -2300, -1200)).to.be.equal(-5000);
    });

    it('should return 11111 when called with numbers [11110, 1]', function() {
        expect(validator.add(11110, 1)).to.be.equal(11111);
    });

    it ('should throw an error if some value is not a number. Values are [1, -1, "1"]', function() {
        expect(() => validator.add(1, -1, "1")).to.throw("Array contains non-numeric values - [number,number,string]");
    });
})