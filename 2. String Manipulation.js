function manipulateString(inputString) {
    // Convert the characters to uppercase.
    const manipulatedString = inputString.toUpperCase();
  
    // Define the callback function logString.
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    // Return the logString callback function.
    return logString;
  }
  
  // Example usage:
  const input = "Hello, World!";
  const logStringCallback = manipulateString(input);
  
  // Now, you can call logStringCallback to log the manipulated string.
  logStringCallback(); // Output: "The manipulated string is: HELLO, WORLD!"
  