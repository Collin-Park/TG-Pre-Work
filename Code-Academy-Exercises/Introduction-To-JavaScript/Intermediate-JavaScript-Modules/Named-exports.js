let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
 }
];

let flightRequirements = {
  requiredStaff : 4
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff ) {
    return true;
  } else {
		return false;
  }
};

export { availableAirplanes, flightRequirements, meetsStaffRequirements };


/*
ES6 also introduced a new export protocol that allows for exporting of data,
in this exercise we created what would be properties of an object and export them
as individual named exports.
*/
