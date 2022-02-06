import { BinarySearchTree } from '../binary-search';

const binarySearchTree = new BinarySearchTree();
binarySearchTree.add(10);
binarySearchTree.add(5);
binarySearchTree.add(13);
binarySearchTree.add(8);
binarySearchTree.add(1);
binarySearchTree.add(12);

const log = JSON.stringify(binarySearchTree.log());
const expected = '{"value":10,"left":{"value":5,"left":{"value":1,"left":null,"right":null},"right":{"value":8,"left":null,"right":null}},"right":{"value":13,"left":{"value":12,"left":null,"right":null},"right":null}}';

console.assert(log === expected, true);

console.assert(binarySearchTree.search(2) === false);
console.assert(binarySearchTree.search(13) === true);
