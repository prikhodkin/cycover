export default (url, method, data) => {
  return fetch(url, {
    method: method,
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    body: data
  })
  .then(
    (response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      return response.json();
    }
  )
  .catch(error => console.log(error))
}
