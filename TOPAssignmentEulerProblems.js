//Task: Find the sum of all the multiples of 3 or 5 below 1000.
//Identify:  Is value between [1, 1000] multiple of 3 or 5?  If it is, save to array.
//Add up all numbers in array and display result.

let multiples = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0 ) {
    multiples.push(i);
  }
};

let multiplesSum = multiples.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log('The sum of all the multiples of 3 or 5 up to and including 1000 is ' + multiplesSum + '.');
