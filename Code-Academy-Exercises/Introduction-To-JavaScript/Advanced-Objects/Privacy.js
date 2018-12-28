const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';

robot.recharge();

/*when calling for privacy in js, we use underscore before the property to denote to coders
that we're going for privacy here. althought we can't stop the data from manipulation yet
we can set and get in the future to achieve higher privacy*/
