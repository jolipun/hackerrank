"use strict";

function processData(rawInput) {
    let processedInput = rawInput.split('\n');
    let phoneBook = assemblePhoneBook(processedInput);
    let names = assembleNames(processedInput)

    checkForNames(names, phoneBook);
}

function assemblePhoneBook(arr) {
    let phoneBooklength = Number(arr[0]);
    let contactsArray = [];
    for (let i = 1; i <= phoneBooklength; i++) {
        let namePhonePair = arr[i].split(' ');
        contactsArray.push(namePhonePair);
    }
    return new Map(contactsArray);
}

function assembleNames(arr) {
    let firstNameElementIndex = Number(arr[0]) + 1;
    let names = [];
    for (let i = firstNameElementIndex; i < arr.length; i++) {
        names.push(arr[i]);
    }
    return names;
}

function checkForNames(names, phoneBook) {
    names.forEach(name => 
        phoneBook.has(name) ? 
        console.log(`${name}=${phoneBook.get(name)}`) : 
        console.log('Not found'));
}

processData('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry');
