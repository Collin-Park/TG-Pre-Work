import Airplane from './airplane';

function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(function(element) {
    console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`)
  });
};

displayFuelCapacity()

/*
ES6 also has new and improved syntax for importing, instead of require, we can import
directly while defining an object that we're importing into.

import X from url;

creates X object from the source.
*/
