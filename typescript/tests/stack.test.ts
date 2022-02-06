import { StackImpl } from '../stack';

const stack = new StackImpl<number>();

console.assert(stack.size() === 0);
console.assert(stack.peek() === null);

stack.push(10);
stack.push(20);
stack.push(30);

console.assert(stack.peek() === 30);
console.assert(stack.size() === 3);

const data = stack.pop();

console.assert(data === 30);
console.assert(stack.peek() === 20);
console.assert(stack.size() === 2);
