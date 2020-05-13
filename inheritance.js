'use strict';

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }

    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification);
        this.scores = scores;
    }

    calculate() {
        let total = this.scores.reduce((acc, curr) => acc + curr) / this.scores.length;
        if (total < 40) {
            return "T";
        } else if (40 <= total && total < 55) {
            return "D";
        } else if (55 <= total && total < 70) {
            return "P";
        } else if (70 <= total && total < 80) {
            return "A";
        } else if (80 <= total && total < 90) {
            return "E";
        } else {
            return "O";
        }
    }
}

let arr = [100, 80];

let student = new Student('Aldona', 'lastName', 858585, [100, 80]);
console.log(student.calculate());
