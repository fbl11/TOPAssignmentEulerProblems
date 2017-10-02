//Task: Find the sum of all the multiples of 3 or 5 below 1000.
//Identify:  Is value between [1, 1000] multiple of 3 or 5?  If it is, save to array.
//Add up all numbers in array and display result.

let multiples = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0 ) {
    multiples.push(i);
  }
};

let multiplesSum = multiples.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log('The sum of all the multiples of 3 or 5 up to and including 1000 is ' + multiplesSum + '.');


//Task: Find sum of even-valued terms for Fibonacci numbers whose individual values do not exceed four million.
//Identify: All Fibonacci numbers between [1 , 4000000], even-valued Fibonacci numbers between [1, 4000000].  Save to array.
//Add up all numbers in array and display result.

let fibString = [1];
let fibOne = 1;
let fibTwo = 1;
let fibEven = [];

while ( fibOne && fibTwo <=  4000000 ) {
  fibTwo =  fibTwo + fibOne;
  fibOne = fibTwo - fibOne;
   fibString.push(fibTwo);
};

fibString.forEach((fib) => {
  if (fib % 2 === 0) {
  fibEven.push(fib) ;
  }
});

let fibEvenSum = fibEven.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log('The sum of all even Fibonacci numbers up to 4000000 is ' + fibEvenSum + '.');
