const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal =>{
  return animal === 'elephant';
});

console.log (foundAnimal)

const startsWithS = animals.findIndex(animal =>{
  return animal[0] === 's';
});

console.log (startsWithS)

/*
findIndex is a method by which the index of the first instance of index matching is displayed
the output is the index in the array in which the condition is true.
*/
