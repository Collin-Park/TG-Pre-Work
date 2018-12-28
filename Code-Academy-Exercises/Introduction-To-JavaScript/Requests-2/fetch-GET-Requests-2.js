fetch('https://api-to-call.com/endpoint').then(
  response => {
  if (response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
},
	networkError =>{
    console.log(networkError.message)
  }
).then(
  jsonResponse => {
    return jsonResponse;
  }
);
/* we fetch an api and then follow up with promises
using the .then notation. several functions are
defined to return the response.json, display an
error and return jsonresponse.*/
