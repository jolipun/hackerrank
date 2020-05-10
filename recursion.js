'use strict';

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = factorial(n);

    ws.write(result + "\n");

    ws.end();
}

function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;

    // Recursive case
    } else {
        return (n * factorial(n - 1));
    }
}


let result  = factorial(5);

console.log(result);
