import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';
import meetsSpeedRangeRequirements from './airplane';


function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
	availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
};

displayStaffStatus();

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();

/*when we import we must continue to branch the same set of data together as they were clumped
on export, at the top of the document we can see the two sets of imports as in line with the
export conditions from the previous exercise*/
