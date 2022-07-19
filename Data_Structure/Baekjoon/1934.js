let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, ...test] = input;
let answer = '';

function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}

function lcm(minNum, maxNum){
  return minNum * maxNum / gcd(minNum, maxNum);
}

for (let i = 0; i < n; i++) {
  const nums = test[i].split(' ').map(Number);
  const min = Math.min(nums[0], nums[1]);
  const max = Math.max(nums[0], nums[1]);

  answer += `${lcm(min, max)}\n`;

}

console.log(answer);
