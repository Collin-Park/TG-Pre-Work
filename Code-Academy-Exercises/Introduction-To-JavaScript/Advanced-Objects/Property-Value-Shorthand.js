function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

/*
with es6, we no longer have to write out all the key-value pair properties, we can just write
the arguments, without calling for the key value pair.
*/
