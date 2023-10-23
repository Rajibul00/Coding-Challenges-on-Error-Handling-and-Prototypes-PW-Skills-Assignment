function fetchDataFromAPI() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched from the API:', data);
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }
  
  // Call the function to fetch and log data from the API
  fetchDataFromAPI();
  