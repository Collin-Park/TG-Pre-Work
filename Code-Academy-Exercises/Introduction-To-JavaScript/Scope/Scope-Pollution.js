const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

/* if a variable is defined globally but the value of that variable is changed
within a block, that global variable's value will also change.
in this example we globally define stars as the 'North Star' later within the function
we define it as 'Sirius' by doing this we change the global variable, this may not be
desirable.*/
