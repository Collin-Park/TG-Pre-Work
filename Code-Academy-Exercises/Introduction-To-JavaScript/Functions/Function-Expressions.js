const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  }
  else {
    return false;
  }
}

plantNeedsWater('Tuesday')

console.log(plantNeedsWater('Tuesday'))

/*
functions can also be defined in a different fashion, called a function expression
instead of using the keyword function, we can set a variable to be a function
function expressions are not hoisted, so the function expression must be called
before the function can be called.
*/
