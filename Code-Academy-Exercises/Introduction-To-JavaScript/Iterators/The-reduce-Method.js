const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
	console.log('The value of accumulator: ', accumulator);
	console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

/*
reduce is a function that takes in an array and operates on it to reduce it to a single
value output.
hwew we use reduce to add the numbers along the array. we display both the accumulator and the
current values.
*/
