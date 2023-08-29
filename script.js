// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the books container and add button
  const booksContainer = document.querySelector(".books-container-wrap");
  const addButton = document.querySelector(".add-button");

  // Initialize the booksObject from local storage or an empty object
  let booksObject = JSON.parse(localStorage.getItem("booksData")) || {};

  // Function to save data to local storage
  function saveDataToLocalStorage() {
    localStorage.setItem("booksData", JSON.stringify(booksObject));
  }

  // Function to display books
  function displayBooks() {
    // Clear the booksContainer
    if (booksContainer) {
      booksContainer.innerHTML = "";

      // Initialize a variable to alternate between background colors
      let isYellowBackground = true;

      // Iterate through the booksObject and display each book
      for (const key in booksObject) {
        if (booksObject.hasOwnProperty(key)) {
          const book = booksObject[key];
          const div = document.createElement("div");
          div.classList.add("books-container");
          // Toggle background color for each book
          div.style.backgroundColor = isYellowBackground ? "gray" : "lightgray";
          isYellowBackground = !isYellowBackground; // Toggle the color

          div.innerHTML = `
            <div class='text-wrap' >
              <p class='title-text'>${book.title}</p>
              <p class='author-text'>By: ${book.author}</p>
            </div>
            <button class="remove">Remove</button>
          `;

          // Add a click event listener to the "Remove" button
          const removeButton = div.querySelector(".remove");
          removeButton.addEventListener("click", () => {
            removeBook(key);
          });

          booksContainer.appendChild(div);
        }
      }

      // Save data to local storage after updating
      saveDataToLocalStorage();
    }
  }

  // Function to add a new book
  function addBook(title, author) {
    // Validate input (both fields must be filled)
    if (title && author) {
      const newKey = `book${Object.keys(booksObject).length + 1}`;
      const newBook = {
        title,
        author,
      };
      booksObject[newKey] = newBook;
    }
  }

  // Function to remove a book
  function removeBook(key) {
    // Remove the book from the booksObject
    delete booksObject[key];
    // Display the updated list of books
    displayBooks();
  }

  // Display initial data on page load
  displayBooks();

  // Add event listener for the "Add" button
  if (addButton) {
    addButton.addEventListener("click", () => {
      const titleInput = document.getElementById("title-id").value;
      const authorInput = document.getElementById("author-id").value;

      // Call the addBook function to add a new book
      addBook(titleInput, authorInput);

      // Clear input fields
      document.getElementById("title-id").value = "";
      document.getElementById("author-id").value = "";

      // Display the updated list of books
      displayBooks();
    });
  }
});
