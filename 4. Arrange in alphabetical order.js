// Sample list of book objects
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    // Add more book objects as needed
  ];
  
  // Define the callback function to log book titles in alphabetical order
  function logBookTitlesInAlphabeticalOrder(titleList) {
    const sortedTitles = titleList.sort(); // Sort the titles alphabetically
    console.log("Book titles in alphabetical order:");
    for (const title of sortedTitles) {
      console.log(title);
    }
  }
  
  // Function to extract book titles and call the callback function
  function extractBookTitlesAndLog(books, callback) {
    const bookTitles = books.map(book => book.title);
    callback(bookTitles);
  }
  
  // Call the function to extract book titles and log them
  extractBookTitlesAndLog(books, logBookTitlesInAlphabeticalOrder);
  