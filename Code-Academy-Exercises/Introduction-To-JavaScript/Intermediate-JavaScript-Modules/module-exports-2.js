let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function(){
    return this.myAirplane;
  }
};

/*code in 2-airplane.js above
code in 2-missionControl.js below*/

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());

/*
here we learned that objects can be exported as module.exports
and that when calling a function within an imported (require) object, we need
to call it using the method as a property of the object defined in the import.
*/
