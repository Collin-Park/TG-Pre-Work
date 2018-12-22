const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 10000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
var time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)

function checkConsistentOutput (funcParam, value){
  let instance1 = funcParam(value);
  let instance2 = funcParam(value);
  if (instance1 === instance2) {
    return console.log(funcParam(value));
  } else {
    	return console.log('This function returned inconsistent results');
  }
}

checkConsistentOutput (addTwo, 3)

/*
we can use functions as parameters as long as we call the function within the
block as a function.
in the argument for the defining of the function, the function dummy variable
is put without parens, within the block command, it's inserted with parens,
here we used some logic to compare two instances of the functions.
*/
