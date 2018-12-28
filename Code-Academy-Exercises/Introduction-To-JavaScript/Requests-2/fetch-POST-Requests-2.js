fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
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
    return jsonResponse;
  }
)

/*
a boilerplate code for the fetch post request is
written here, the difference between the get and
the post is that in the post we define a second
argument to the fetch method, an object signifying
method is post and that the body is json stringified
id 200.

the rest of the code is a series of promises that
wait for and follow the response that is returned
from firstly the fetch, followed by the 1st chained
then followed by the second chained then promise.
*/
