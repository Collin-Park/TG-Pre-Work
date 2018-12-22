const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}


changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);

console.log(concept);

/*
arrays bahave in expected ways when called into a function and operated on
we wrote a couple of functions to demonstrate how a function may operate on arrays
*/
