const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitItem){
  console.log("I want to eat a " + fruitItem);
});

fruits.forEach(fruitItem =>
console.log(fruitItem));

function printFruits(element){
  console.log(element);
}

fruits.forEach(printFruits)

/*
.forEach method is a callback function that operates on the identifier, through the dot
command, and then uses a function iteratively.

in this example we have a list of fruits, using the forEach method, we call the function for each
of the element in the list, in order.

the return value for .foreach will always be undefined.
*/
