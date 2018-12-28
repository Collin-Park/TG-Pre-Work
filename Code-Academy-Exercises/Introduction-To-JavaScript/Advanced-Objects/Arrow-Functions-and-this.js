const robot = {
  energyLevel: 100,
  checkEnergy: function() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

/*
arrow function uses variables from the global scope, so calling an arrow function inside an
object literal while calling for this conflicts with the arrow function.
it's good to avoid arrow functions when using this
*/
