const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }

};

robot.numOfSensors = 1000;

console.log(robot.numOfSensors);

/*
setters can be defined within the object to return a property to the object instead of
out of the object.
it's like a check while reassigning, in the exmple here,  the code checks whether the number
put for reassignment is a number and is greater than 0, if it isnt, it logs an error and doesnt
update the number from 15. if it is indeed a number and greater than zero it goes ahead with the
reassignment
*/
