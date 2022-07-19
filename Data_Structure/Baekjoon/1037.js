let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, nums] = input;
const primes = nums.split(' ').map(Number);

const max = Math.max(...primes);
const min = Math.min(...primes);

console.log(max*min);
