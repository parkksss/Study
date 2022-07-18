let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, ...nums] = input;
const numbers = nums.map(n => Number(n));

const stack = [];
let count = 0;

for (let i = 0; i < n; i++) {
  const number = numbers.shift();
  if (number !== 0) {
    stack.push(number);
    count += number;
  } else {
    count -= stack.pop();
  }
}

console.log(count);