{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",   "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC"
}
/*in the packages.json, we add an object build to specify that we're using babel codes for the
transpilation, src specifies that we're transpiling all the JS code inside the src directory,
-d instructs babel to write transpiled code into a directory, and lib writes the codes into a
directory named lib.*/
