'use strict';

function Solution() {
    this.stack = [];
    this.queue = [];

    pushCharacter = function (ch) {
        this.stack.push(ch)
    }

    popCharacter = function (ch) {
        return this.stack.pop(ch)
    }


    enqueueCharacter = function (ch) {
        this.queue.push(ch)
    }


    dequeueCharacter = function (ch) {
        return queue.shift(ch);
    }
}
