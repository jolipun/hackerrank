'use strict';

function main(n) {
    let binaryNumber = n.toString(2);
    let binaryNumberArray = binaryNumber.split("0").map(element => element.length);
    console.log(Math.max(...binaryNumberArray));
}

main(158);