'use strict';

/* function main() {
    const n = parseInt(readLine(), 10);
} */

function main() {
    const n = parseInt(readLine(), 10);
    let binaryNumber = n.toString(2);
    let binaryNumberToArray = binaryNumber.split("").map(num => +num);
    let groupedArray = regroup(binaryNumberToArray);
    let maxSum = findMaxSum(groupedArray);
    console.log(maxSum);
}

main(158);

function regroup(binaryNumberToArray) {
    let megaArray = [];
    let arr = [];
    for (let i = 0; i < binaryNumberToArray.length; i++) {
        const currentElement = binaryNumberToArray[i];
        if (currentElement === 1) {
            arr.push(currentElement);
        } else {
            megaArray.push(arr);
            arr = [];
        }


    }
    megaArray.push(arr);
    return megaArray;
}

function findMaxSum(groupedArray) {
    let arrayOfSums = [];
    for (let element of groupedArray) {
        let sum = element.reduce(function (a, b) {
            return a + b;
        }, 0);
        arrayOfSums.push(sum);
    }

    return Math.max(...arrayOfSums);
}
