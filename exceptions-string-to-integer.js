'use strict';

function checkInput(S) {
    try {
        let N = parseInt(S, 10);
        let fuckup = (isNaN(N) || N === undefined) && nothing();
        console.log(N);
    }
    catch (err) {
        console.log('Bad String');
    }
}

checkInput('ee');