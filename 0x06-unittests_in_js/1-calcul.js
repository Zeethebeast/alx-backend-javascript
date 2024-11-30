function calculateNumber(a, b, type) {
    a = Math.round(a);
    b = Math.round(b);

    switch(type) {
        case 'sum':
            return a + b;
        case 'subtract':
            return a - b;
        case 'division':
            if (b === 0) return 'Error';
            return a / b;
        }
    }
exports.module = calculateNumber;
