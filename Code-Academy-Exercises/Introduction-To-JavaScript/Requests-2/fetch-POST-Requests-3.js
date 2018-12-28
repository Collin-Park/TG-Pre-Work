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
  })
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
a fetch post request was written using the rebrandly, the AJAX function had its properties defined,
method for POST and header as application/json, and api-key, 
*/
