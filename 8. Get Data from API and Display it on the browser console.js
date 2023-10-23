const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data retrieved from the API:');
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
