let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, ...nums] = input;

const queue = [];
let point = 0;
let back = 0;
let result = ""

for (let i = 0; i < n; i++) {
  const action = nums[i].split(' ');
  const command = action[0];

  switch (command) {
    case 'push':
      queue.push(parseInt(action[1]));
      back++;
      break;
    case 'pop':
      if (queue[point]) {
        result += `${queue[point]}\n`;
        delete queue[point];
        point++;
      } else {
        result += `-1\n`;
      }
      break;
    case 'size':
      result += `${back-point}\n`;
      break;
    case 'empty':
      result += `${(point === back) ? 1 : 0}\n`;
      break;
    case 'front':
      result += `${(point === back) ? -1 : queue[point]}\n`
      break;
    case 'back':
      result += `${(point === back) ? -1 : queue[back-1]}\n`
      break;
    default:
      break;
  }
}

console.log(result);
