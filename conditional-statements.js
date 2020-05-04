/* Given an integer, n , perform the following conditional actions:

If n  is odd, print Weird
If n  is even and in the inclusive range of 2 to 5, print Weird

If n is even and in the inclusive range of 6 to 20, print Not Weird
If  is even and greater than 20 , print Not Weird

Complete the stub code provided in your editor to print whether or not  is weird. */


/* function checkWeirdness(n) {
    if (n % 2 === 1 || (n % 2 === 0 && 2 <= n <= 5)) {
        console.log("Weird");
    } else if ((n % 2 === 0 && 6 <= n <= 20) || (n % 2 === 0 && n < 20)) {
        console.log("Not Weird");
    }
}

checkWeirdness(25); */

//


function isOdd(n) {
    return n % 2 === 1;
}

function isEvenAndSmall(n) {
   return n % 2 === 0 && (2 <= n && n <= 5); 
}

function isEvenAndMedium(n) {
    return n % 2 === 0 && (6 <= n && n <= 20);
}

function isEvenAndLarge(n) {
    return n % 2 === 0 && 20 < n;
}

function checkWeirdness(n) {
    if (isOdd(n) || isEvenAndMedium(n)) {
        console.log("Weird");
    } else if (isEvenAndSmall(n) || isEvenAndLarge(n)) {
        console.log("Not Weird");
    }
}

checkWeirdness(4);
