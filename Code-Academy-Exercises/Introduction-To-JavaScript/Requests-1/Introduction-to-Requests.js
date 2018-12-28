<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>JSON Jenerator</title>
    <link rel="stylesheet" type="text/css" href="public/style.css" />

  </head>
  <body>
    <h1>JSON Jenerator:</h1>
    <main>
      <div id="displayContainer">

      </div>
      <div id="buttonContainer">
        <button type="button" id="generate">Jenerate!</button>
      </div>

    </main>
    <script src="public/main.js"></script>
  </body>
</html>

//tml above, JS below

const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

const generateJson = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      changeButton();
    }
  } catch(error) {
    console.log(error);
  }
};

const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
};

const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};

jsonButton.addEventListener('click', generateJson);


/*when we click something on a webpage, we run into the four most common types of http
requests. these are: GET, POST, PUT, and DELETE. in this lesson we'll learn about GET and
POST requests.
when we make a get request we are retreiving data, and for a post request we're posting
data back to the source. we'll use XHR object, data muse api, and rebrandly api to complete
these tasks*/
