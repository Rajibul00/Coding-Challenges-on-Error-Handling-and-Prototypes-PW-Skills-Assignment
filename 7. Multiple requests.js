async function fetchDataFromMultipleAPIs() {
    const todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    const postUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch(todoUrl),
        fetch(postUrl),
      ]);
  
      if (!todoResponse.ok || !postResponse.ok) {
        throw new Error('Network response was not ok');
      }
  
      const [todoData, postData] = await Promise.all([
        todoResponse.json(),
        postResponse.json(),
      ]);
  
      const combinedData = {
        todo: todoData,
        post: postData,
      };
  
      console.log('Combined data from both APIs:', combinedData);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Call the function to fetch and log data from both APIs
  fetchDataFromMultipleAPIs();
  