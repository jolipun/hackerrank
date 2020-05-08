'use strict';

function main(arr) {
    arr.reverse();
    let myReversedString = arr.join(' ');
    console.log(myReversedString);
}



main([3, 4, 5, 7]); // 7 5 4 3