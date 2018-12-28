// Information to reach API
const apiKey = '6a375e063aff4e09b2a86aced03d9bd8';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(
  response => {
    if (response.ok === true) {
      return response.json();
    };
    throw new Error('Request failed!');
  },
  networkError => {
    console.log(networkError.message);
  }
  ).then(
  jsonResponse => {
    renderResponse(jsonResponse);
  }
  )
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


/*
here we chain a secon promise (then) chain function
to the response object thatis returned from the
fetch post request. this first promise contains
a function that checks the fetch was successful
through response.ok, and returns resposne.json
which is fed into the next promise to display the
subset of the object to display
*/
