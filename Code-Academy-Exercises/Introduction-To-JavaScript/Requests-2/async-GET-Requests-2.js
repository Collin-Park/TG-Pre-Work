const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok === true){
       const jsonResponse = await response.json()
       return jsonResponse;
    };
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};

/*
the boilerplate code is written here for async fetch, the async code is a
function with a try and catch, in the try there is an await for a promise
from the fetch method. once response is received the program continues
and saves the response.json (json property being the property in which
the response of interest is saved) after a chain of promises the program
returns the json response. if failed the error message is shown.

*/
