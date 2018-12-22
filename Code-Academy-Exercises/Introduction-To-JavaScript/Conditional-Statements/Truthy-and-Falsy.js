let wordCount = 0;

wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'Hello World!';

favoritePhrase = ""

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/*
since our conditional statements are evaluating for true and false it's important
for us to understand what those boolean values are attributed to.
there are more true statement than false statements,
here is a list of things that evaluate to false:
  -  0
  -  Empty strings like "" or ''
  -  null which represent when there is no value at all
  -  undefined which represent when a declared variable lacks a value
  -  NaN, or Not a Number


*/
