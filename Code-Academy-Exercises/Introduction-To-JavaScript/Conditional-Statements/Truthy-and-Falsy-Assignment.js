let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

/*
consider the following code:

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

if the username is true, then defaultname is username.
if the username is false, then defaultname is 'stranger'

both outcomes set the defaultname variable to either username or 'stranger'
so we can write the conditional statement above as a short cirtuit evaluation:

let defaultname = username || 'stranger'

in this exercise we use a similar concept for writing tools.

*/
