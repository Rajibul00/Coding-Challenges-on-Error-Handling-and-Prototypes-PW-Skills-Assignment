function doubleWithCallback(arr, callback) {
    // Initialize an empty array to store the doubled values.
    const doubledArray = [];
  
    // Iterate through the input array and apply the callback function to each element.
    for (let i = 0; i < arr.length; i++) {
      const doubledValue = callback(arr[i]);
      doubledArray.push(doubledValue);
    }
  
    return doubledArray;
  }
  
  // Example callback function that doubles the input value.
  function doubleValue(num) {
    return num * 2;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const doubledResult = doubleWithCallback(inputArray, doubleValue);
  
  console.log(doubledResult); // Output: [2, 4, 6, 8, 10]
  