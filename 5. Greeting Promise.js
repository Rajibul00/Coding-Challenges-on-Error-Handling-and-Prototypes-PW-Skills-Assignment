function greetWithName(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        const greetingMessage = `Hello, ${name}!`;
        resolve(greetingMessage);
      } else {
        reject("Name is missing. Please provide a name.");
      }
    });
  }
  
  // Example usage:
  const name = "Mithun";
  greetWithName(name)
    .then(message => {
      console.log(message); // Output: "Hello, Mithun!"
    })
    .catch(error => {
      console.error(error);
    });
  