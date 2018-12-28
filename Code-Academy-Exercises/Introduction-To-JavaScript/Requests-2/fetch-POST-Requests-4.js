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
in continuation with the fetch request codewriting
we continue to write the code for fetching, checking
and displaying the results of the fetch.
the results are sent back as json object, we use
a a function to display the only property of interest
within the return object (the response object)
*/
