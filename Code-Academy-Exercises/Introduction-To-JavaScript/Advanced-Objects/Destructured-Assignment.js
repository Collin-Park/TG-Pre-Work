const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};


const {functionality} = robot;
functionality.beep();

/*
if we want to create a new variable which is the same as the key value of a property in an object
we can use the destructured assigment,

a code that may have looked liked this:

const functionality = robot.functionality;

now looks destructured like this:

const {functionality} = robot;

this saves us keystrokes
*/
