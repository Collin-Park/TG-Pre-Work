const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

/*
this is how while loops are constructed in JS
while (conditions in here are true) {
  run this code.
}

*/
