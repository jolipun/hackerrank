'use strict';

function checkInput(input) {
    try {
        let element = Number(input);
        if (isNaN(element) || element === undefined) {
            throw 'Bad String';
        } else {
            console.log(element);
        }
    }
    catch (err) {
        console.error(err);
    }
}

checkInput('3');