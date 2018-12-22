const city = 'New York City'

var logCitySkyline = () => {
  let skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())

/*
inside the the block we define the scope of a variable for a function.
in the example above, we return the string to be saved called from a global scope.
had we removed the return and instead saved the string into another variable, if we
tried to call that variable in the future we'd not be able to.
*/
