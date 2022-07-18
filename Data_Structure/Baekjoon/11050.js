let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [n, k] = input.map(Number);

const factorial = (n) => {
  let mul = 1;
  for (let i = 2; i <= n; i++) {
    mul *= i;
  } 
  return mul;
}
const base = factorial(n-k) * factorial(k)
const top = factorial(n)
console.log(top/base)
