const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe('Math Operations', () => {
    it('should return the sum of two rounded numbers', () => {
        const result = calculateNumber(1.4, 4.5, 'sum');
        assert.strictEqual(result, 6); // 1 + 5
    });

    it('should return the subtraction of two rounded numbers', () => {
        const result = calculateNumber(1, 3.7, 'subtract');
        assert.strictEqual(result, -3); // 1 - 4
    });

    it('should return the division of two rounded numbers', () => {
        const result = calculateNumber(1.4, 4.5, 'divide');
        assert.strictEqual(result, 0.2); // 1 / 5
    });

    it('should handle division by zero and return "Error"', () => {
        const result = calculateNumber(1.4, 0, 'divide');
        assert.strictEqual(result, 'Error');
    });
});

