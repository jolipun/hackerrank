'use strict';

function main(n, k) {
    let result = createBitwiseValueArray(n, k);
    console.log(getMax(result));
}

function createBitwiseValueArray(n, k) {
    let bitwiseValueArray = [];
    for (let b = 1; b <= n; b++) {
        for (let a = 1; a < b; a++) {
            let bitwiseValue = a & b;
            if (bitwiseValue < k) {
                bitwiseValueArray.push(bitwiseValue);
            }
        }
    }
    return bitwiseValueArray;
}

function getMax(arr) {
    let len = arr.length;
    let max = -Infinity;

    while (len--) {
        max = arr[len] > max ? arr[len] : max;
    }
    return max;
}

main(5, 2);