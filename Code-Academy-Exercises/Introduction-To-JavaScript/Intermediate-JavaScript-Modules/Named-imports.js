import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';


function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
	availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
};

displayStaffStatus();

/*
imports can be brought in the same way multiple exports are exported.
import {import items} from (url).
*/
