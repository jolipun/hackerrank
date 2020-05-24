'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data) {
    this.data = data;
    this.next = null;
}
function Solution() {

// My code
    this.removeDuplicates = function (head) {
        if (!head) {
            return head;
        } else {
            let current = head;
            while (current.next != null) {
                let nextNode = current.next;
                if (current.data === nextNode.data) {
                    current.next = current.next.next;
                } else {
                    current = current.next;
                }
            }
        }
        return head;
    }
// My code

}