'use strict'

if(root.left === null && root.right === null) {
    return 0;
}
if(root.left === null && root.right !== null) {
    return this.getHeight(root.right) +1;
}
if(root.left !== null && root.right === null) {
    return this.getHeight(root.left) +1;
}
let leftHight = this.getHeight(root.left);
let rightHight = this.getHeight(root.right);

return Math.max(leftHight, rightHight) + 1;