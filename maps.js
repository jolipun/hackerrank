"use strict";

function processData(input) {
    let inputArray = input.split('\n');
    let phoneBook = assemblePhoneBook(inputArray);
    let namesArray = assembleNames(inputArray)

    checkForNames(namesArray, phoneBook);
}

function assemblePhoneBook(arr) {
    let phoneBooklength = Number(arr[0]);
    let contactsArray = [];
    for (let i = 1; i <= phoneBooklength; i++) {
        contactsArray.push(arr[i].split(' '));
    }
    return new Map(contactsArray);
}

function assembleNames(arr) {
    let firstElementIndex = Number(arr[0]) + 1;
    let namesArray = [];
    for (let i = firstElementIndex; i < arr.length; i++) {
        namesArray.push(arr[i]);
    }
    return namesArray;
}

function checkForNames(namesArray, phoneBook) {
    let arrayLength = namesArray.length;
    for (let i = 0; i < arrayLength; i++) {
        if (phoneBook.has(namesArray[i])) {
            console.log(`${namesArray[i]}=${phoneBook.get(namesArray[i])}`)
        } else {
            console.log('Not found');
        }
    }
}

processData('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry'); 