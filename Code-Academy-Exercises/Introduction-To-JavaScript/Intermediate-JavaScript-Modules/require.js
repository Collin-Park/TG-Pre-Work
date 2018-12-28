const Airplane = require('./1-airplane.js');

function displayAirplane(){
  console.log(Airplane.myAirplane);
};

displayAirplane()

/*
to call the exported module we use the command require. require needs the exact path in which
the file is saved in order for it to function correctly.
we import (using require) Airplane and define it locally on this file as Airplane.

we create a function to log the key myAirplane and run the method.
*/
