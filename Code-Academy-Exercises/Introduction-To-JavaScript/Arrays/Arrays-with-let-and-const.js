let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon'
console.log(utensils)

/*
contents of both the let and the const defined variables can be updated using this
method. the contrast between the two lists is that while the variable defined by let
can be completely redefined, the one defined by const cannot.
*/
