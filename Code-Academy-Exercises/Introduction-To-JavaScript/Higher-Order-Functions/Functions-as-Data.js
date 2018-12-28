const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2();

console.log(is2p2.name);

/* 
When we have very long names like checkThatTwoPlusTwoEqualsFourAMillionTimes,
we can asign a new variable to take that name.
this new variable can be used to run the function as well as to call the initial
name of the function it took on.
*/
