let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let isPrimeNumber = Array(input[1]+1).fill(true);
isPrimeNumber[0] = false;
isPrimeNumber[1] = false;

const isPrime = () => {
  for (let i = 2; i <= (input[1]); i++) {
    if(isPrimeNumber[i]) {
      let multi = 2;
      while(i * multi <= input[1]) {
        isPrimeNumber[i * multi] = false;
        multi++;
      }
    }
  }

  for (let i = input[0]; i <= input[1]; i++) {
    if(isPrimeNumber[i]) {
      console.log(i);
    }
  }
}

isPrime();