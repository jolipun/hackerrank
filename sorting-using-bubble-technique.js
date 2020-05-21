'use strict';

function sortElements(a, n) {
    let numSwaps = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                numSwaps++;
            }
        }
        if (numSwaps == 0) {
            break;
        }
    }
    console.log(`Array is sorted in ${numSwaps} swaps`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n - 1]}`);
}

sortElements([5, 2, 12, 4, 3], 5);
