let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [n, m] = input;
const min = Math.min(n, m);
const max = Math.max(n, m);

let gcd = 1;
let lcm = max;

for (let i = 1; i <= min; i++) {
  if ((min % i) === 0 && (max % i) === 0) {
    gcd = i;
  }
}

while (true) {
  if ( (lcm % max) === 0 && (lcm % min) === 0 ) break;
  lcm++;
}

console.log(`${gcd}\n${lcm}`);
