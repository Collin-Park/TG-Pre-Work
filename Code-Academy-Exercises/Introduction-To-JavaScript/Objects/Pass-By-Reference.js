let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

function greenEnergy(obj){
  obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
  obj.disabled = true;
};

greenEnergy(spaceship);
console.log(spaceship);

remotelyDisable(spaceship);
console.log(spaceship);


/*
passing by reference, unlike passing by value, changes the value of the input.
key-value pairs can be added and changed but can't be redefined using functions.
*/
