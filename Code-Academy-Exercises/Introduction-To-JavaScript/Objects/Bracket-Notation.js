let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below

let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);

/*just as arrays and strings are able to be called through square bracket notation,
so can objects. sometimes it's only possible to use the square brackets, i.e.
we cant use the dot notation using the string 'Active Mission' also we can't use
the variable propName, because it'd look for that key.*/
