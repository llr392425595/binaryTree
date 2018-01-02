let {Node, BinaryTree} = require('./binaryTree');

let nodes = [8,3,10,1,6,14,4,7,13];
let binaryTree = BinaryTree.createBinaryTreeByArry(nodes);
//binaryTree.inOrderTraverse(BinaryTree.callback);
//binaryTree.preOrderTraverse(BinaryTree.callback);
//binaryTree.postOrderTraverse(BinaryTree.callback);
// let minNode = binaryTree.getMinNode();
// console.log(minNode)
// let maxNode = binaryTree.getMaxNode();
// console.log(maxNode)
// let target = new Node(7);
// let isIn = binaryTree.search(target)
// console.log(isIn)
// let target2 = new Node(9);
// let isIn2 = binaryTree.search(target2)
// console.log(isIn2)
// let target = new Node(3);
// binaryTree.remove(target);
console.log(binaryTree)