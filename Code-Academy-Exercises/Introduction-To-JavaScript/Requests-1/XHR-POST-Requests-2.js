const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  };
};

xhr.open('POST', url);
xhr.send(data);


/*
the boilerplate post request is very similar
to the get request, the only difference is that
we are sending the information insead of
receiving.
*/
