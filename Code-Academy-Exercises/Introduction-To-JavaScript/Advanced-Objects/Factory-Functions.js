const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500', true);

tinCan.beep();

/*
objects can be mass produced by calling a function that can create objects with ease.
in this exercise we create a factory function that takes in two variables model and mobile
to pass out a function at the end.  
*/
