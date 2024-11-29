const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe('Math Additions', () => {
    it('should return the sum of two numbers', () => {
        const result = calculateNumber(1, 3);
        assert.strictEqual(result, 4); // Check if the sum is correct
    });

    it('should handle floating-point numbers', () => {
        const result = calculateNumber(1, 3.7);
        assert.strictEqual(result, 5); // 1 + 4
    });

    it('should handle rounding down', () => {
        const result = calculateNumber(1.2, 3.7);
        assert.strictEqual(result, 5); // 1 + 4
    });

    it('should handle rounding up', () => {
        const result = calculateNumber(1.5, 3.7);
        assert.strictEqual(result, 6); // 2 + 4
    });
});
