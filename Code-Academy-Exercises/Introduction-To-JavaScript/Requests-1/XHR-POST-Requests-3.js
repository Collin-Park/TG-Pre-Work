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
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    };
  };
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


/*
we used a rebrandly api to shorten a website
url, to tell rebrandly to shorten the url
we had to first send the data, which was
linked to the submit form field of the web
render.
when posting data and the body, we need to
ensure that the language is javascript object
notation and that everything sent is a string.

*/
