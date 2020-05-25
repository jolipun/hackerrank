'use strict';

function processData(input) {
    let myArray = input.split('\n');
    myArray.shift();
    myArray
        .map(num => {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return num > 1;
        })
        .forEach(isPrime => {
            isPrime ? console.log('Prime') : console.log('Not prime');
        });
}

processData('3\n15\n5\n7');
