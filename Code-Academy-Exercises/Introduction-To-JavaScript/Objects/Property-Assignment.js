let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below

spaceship.color = 'glorious gold';
spaceship.numEngines = 6;
delete spaceship['Secret Mission'];

/*
we can assign properties within an object by setting the property within the object to
be equal to the new value that we want the key to be associated with.
*/
