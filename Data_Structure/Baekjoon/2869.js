let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const a = input[0];
const b = input[1];
let v = input[2];
let days = 1;

days = Math.ceil((v - b) / (a - b));

console.log(days);