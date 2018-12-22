var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

/*global scope is the way in which variables and functions are defined which allows
them to be access anywhere in the code.
in this exercise, three variables are defined globally and called within the function
block.*/
