class Calculator {
    constructor() {

    };

    add(...numbers) {
        if (numbers.length === 0) {
            return 0;
        }

        if (numbers.some((item) => typeof item !== 'number')) {
            throw new Error(`Array contains non-numeric values - [${numbers.map(item => typeof item)}]`);
        }
        
        let sum = 0;
        for (let i =0; i < numbers.length; i++) 
            sum += numbers[i];
        
        return sum;
    };
    

    multiply(...numbers) {
        if (numbers.length === 0) {
            return 0;
        }

        if (numbers.some((item) => typeof item !== 'number')) {
            throw new Error(`Array contains non-numeric values - [${numbers.map(item => typeof item)}]`);
        }

        let multiplication = 1;
        for (let i =0; i < numbers.length; i++) {
            if (numbers[i] === 0) {
                return 0;
            }
            multiplication *= numbers[i];
        } 
        
        return multiplication;
    };
}

module.exports = Calculator;
