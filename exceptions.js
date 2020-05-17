'use strict';

class Calculator {
    constructor() {
    }
    power(n, p) {
        let result = Math.pow(n, p);
        try {
            if (n < 0 || p < 0) {
                throw "n and p should be non-negative"
            } else {
                console.log(result);
            }
        }
        catch (err) {
            console.log(`Error occured: ${err}`);
        }

    }
}

let check = new Calculator;
check.power(-2, 5);

