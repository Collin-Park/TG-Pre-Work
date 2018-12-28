const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robot.energyLevel);

/*
getters are methods that get and return internal properties of an object.
here we use a get statement to check if energylevel is a number and use that to
return statements based on the result
*/
