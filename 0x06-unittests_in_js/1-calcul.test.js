const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require(".1-calcul");

describe('Math Additions', () => {
    it('should return the sum of two numbers', () => {
        const result = calculateNumber(1.4, 4.5, 'sum');
        assert.strictEqual(result, 6); // Check if the sum is correct
    });

    it('should handle floating-point numbers', () => {
        const result = calculateNumber(1, 3.7, 'subtract');
        assert.strictEqual(result, -4); // 1 + 4
    });

    it('should handle rounding down', () => {
        const result = calculateNumber(1.4, 4.5, 'divide');
        assert.strictEqual(result, 0.2); // 
    });

    it('should handle rounding up', () => {
        const result = calculateNumber(1.4, 0, 'divide');
        assert.strictEqual(result, 'Error'); // 2 + 4
    });
});
