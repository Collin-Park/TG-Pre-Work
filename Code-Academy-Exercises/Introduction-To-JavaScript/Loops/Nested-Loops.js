// Write your code below

const bobsFollowers = ['Becky', 'Tyrone', 'Pradeet', 'Xiao Hui'];
const tinasFollowers = ['Becky', 'Tyrone', 'Collin'];

var mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j=0; j<tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
};

console.log(mutualFollowers);

/*
loops can have loops in them, this is particularly useful when checking the elements
of a list against the elements of another list. 
*/
