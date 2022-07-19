let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, ...nums] = input;
const numbers = nums.map(n => Number(n));

const stack = [];
let count = 1;
let output = '';

for (let i = 0; i < n; i++) {
  const number = numbers.shift();
  while (count <= number) {
    stack.push(count);
    output += '+\n'
    count++;
  }
  const temp = stack.pop();
  if (temp !== number) {
    console.log('NO');
    return;
  }
  output += '-\n'
}

console.log(output);