import { QeueImpl } from '../qeue'

const qeue = new QeueImpl<number>();

console.assert(qeue.size() === 0);
console.assert(qeue.peek() === null);

qeue.enqeue(10);
qeue.enqeue(20);
qeue.enqeue(30);

console.assert(qeue.peek() === 10);
console.assert(qeue.size() === 3);

const deq = qeue.deqeue();

console.assert(qeue.size() === 2);
console.assert(deq === 10);
