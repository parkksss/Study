let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const testLength = parseInt(input[0]);

for (let i = 1; i < testLength+1; i ++) {
  const test = input[i].split(' ');
  const h = test[0];
  const w = test[1];
  const n = test[2];
  let floor = (n % h == 0) ? h : (n % h);
  let room = (n % h == 0) ? n / h : parseInt(n / h) + 1;
    
  if (room < 10) {
      console.log(`${floor}0${room}`);
  } else {
      console.log(`${floor}${room}`);
  }
  
}