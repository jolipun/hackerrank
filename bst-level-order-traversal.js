'use strict';

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function levelOrder
    this.levelOrder = function(root) {
        let myQueue = [];
        let myArray = [];
        let temp_node = root;
        while(temp_node !== undefined) {
            myArray.push(temp_node.data);
            if(temp_node.left !== null) {
                myQueue.push(temp_node.left);
            }
            if(temp_node.right !== null) {
                myQueue.push(temp_node.right);
            }
            temp_node = myQueue.shift();
        }
        console.log(...myArray);
        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')

	}; // End of function levelOrder
}; // End of function BinarySearchTree

let myRoot = new Node(3);
myRoot.left = new Node(2);
myRoot.right = new Node(5);
myRoot.left.left = new Node(1);
myRoot.right.left = new Node(4);
myRoot.right.right = new Node(7);

let test = new BinarySearchTree();
test.levelOrder(myRoot);

