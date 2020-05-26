'use strict';

function processData(input) {
    const inputArray = input.split('\n');
    const returnDateArray = inputArray.shift().split(" ");
    const expectedDateArray = inputArray.shift().split(" ");
    const actual = new Date(+returnDateArray[2], +returnDateArray[1] - 1, +returnDateArray[0]);
    const expected = new Date(+expectedDateArray[2], +expectedDateArray[1] - 1, +expectedDateArray[0]);

    let fine = 0;

    if (actual.getTime() === expected.getTime() || actual < expected) {
        fine = 0;
        console.log(fine);
    } else if (actual > expected && actual.getMonth() === expected.getMonth() && actual.getYear() === expected.getYear()) {
        fine = 15 * (actual.getDate() - expected.getDate());
        console.log(fine);
    } else if (actual.getMonth() > expected.getMonth() && actual.getYear() === expected.getYear()) {
        fine = 500 * (actual.getMonth() - expected.getMonth());
        console.log(fine);
    } else {
        fine = 10000;
        console.log(fine);
    }
}

processData('25 12 1992\n20 11 1991');