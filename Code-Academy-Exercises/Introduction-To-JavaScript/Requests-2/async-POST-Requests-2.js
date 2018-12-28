const getData = async() => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    });
    if (response.ok === true) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
};

/*
the format of the post request using async is the same as the get request
using async with the difference of specifying additional requirements for
the object inside fetch, which must include the metho type, the body,
and sometimes headers (depending on if we use apikeys or not)
*/
