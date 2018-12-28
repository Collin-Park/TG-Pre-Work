const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
   return xhr.response;
 };
};

xhr.open('GET', url);
xhr.send('GET', XMLHttpRequest);

/*
here we reconstructed the XHR GET request. the first two lines create a new request,
the body has the handle reponse and the bottom two lines open request and send object.
*/
