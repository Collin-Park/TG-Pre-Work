let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for (let crewMembers in spaceship.crew) {
  console.log(`${crewMembers}: ${spaceship.crew[crewMembers].name}`)
};

for (let crewMembers in spaceship.crew) {
  console.log(`${spaceship.crew[crewMembers].name}: ${spaceship.crew[crewMembers].degree}`)
};



/*
objects can be looped through using the for loop to use the for loop on an object the
key is replaced with a dummy variable, while looping through.
*/
