function ageInDays(person) {
    // Concatenate the first and last name into a single string.
    const fullName = `${person.firstName} ${person.lastName}`;
  
    // Calculate the age in days.
    const ageInDays = person.age * 365; // Assuming an average of 365 days per year.
  
    // Define the callback function to log the message.
    function logMessage() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
  
    // Return the logMessage callback function.
    return logMessage;
  }
  
  // Example usage:
  const personInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  const logMessageCallback = ageInDays(personInfo);
  
  // Now, you can call logMessageCallback to log the message to the console.
  logMessageCallback(); // Output: "The person's full name is John Doe and their age in days is 10950."
  