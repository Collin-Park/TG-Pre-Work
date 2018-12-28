const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animal =>{
  return animal[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(number =>{
  return number/100;
});

console.log(smallNumbers);

/*
map method is similar to the foreach method but creates a variable at the end of the operation
just like foreach, the .map() function cares about the order of the array
*/
