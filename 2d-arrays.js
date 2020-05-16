'use strict'

function main() {
    let arr = Array(6);
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let sums = [];

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {

            const sum = getSumByCoordinates(arr, i, j)
            sums.push(sum);

        }
    }

    let max = Math.max(...sums);
    console.log(max);

}

function getSumByCoordinates(arr, i, j) {
    let sum = arr[0 + i][0 + j] + arr[0 + i][1 + j] + arr[0 + i][2 + j] + arr[1 + i][1 + j] + arr[2 + i][0 + j] + arr[2 + i][1 + j] + arr[2 + i][2 + j];
    return sum;
}






