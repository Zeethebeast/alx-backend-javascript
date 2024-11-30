function calculateNumber(a, b, type) {
    a = Math.round(a);
    b = Math.round(b);

    switch (type) {
        case 'sum':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide': // Align with test case naming
            if (b === 0) return 'Error';
            return a / b;
        default:
            throw new Error('Invalid operation type');
    }
}

module.exports = calculateNumber;

