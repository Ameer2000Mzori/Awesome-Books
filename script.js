// Select the books container and add button
const booksContainer = document.querySelector(".books-container");
const addButton = document.querySelector(".add-button");

// Initialize the booksObject
let booksObject = {};

// Function to load data from local storage
function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("booksData");
  if (storedData) {
    booksObject = JSON.parse(storedData);
  }
}

// Function to save data to local storage
function saveDataToLocalStorage() {
  localStorage.setItem("booksData", JSON.stringify(booksObject));
}

// Function to display persons/books
function displayBooks() {
  // Clear the booksContainer
  booksContainer.innerHTML = "";

  // Iterate through the booksObject and display each person (book)
  for (const key in booksObject) {
    if (booksObject.hasOwnProperty(key)) {
      const person = booksObject[key];
      const div = document.createElement("div");
      div.innerHTML = `
      <div class='book-wrap'>
      <div class='text-wrap'>
        <p class='title-text'> ${person.firstName} </p>
        <p class='author-text'> By : ${person.lastName}</p>
        </div>
        <button class="remove">Remove</button>
        </div>
      `;

      // Add a click event listener to the "Remove" button
      const removeButton = div.querySelector(".remove");
      removeButton.addEventListener("click", () => {
        removePerson(key);
      });

      booksContainer.appendChild(div);
    }
  }

  // Save data to local storage after updating
  saveDataToLocalStorage();
}

// Function to add a new person/book
function addPerson(firstName, lastName) {
  const newKey = `person${Object.keys(booksObject).length + 1}`;
  const newPerson = {
    firstName,
    lastName,
  };
  booksObject[newKey] = newPerson;
}

// Function to remove a person/book
function removePerson(key) {
  // Remove the person/book from the booksObject
  delete booksObject[key];
  // Clear and re-display the booksContainer with updated data
  displayBooks();
}

// Load data from local storage on page load
loadDataFromLocalStorage();

// Display initial data on page load
displayBooks();

// Add event listener for the "Add" button
addButton.addEventListener("click", () => {
  const firstName = document.getElementById("title-id").value;
  const lastName = document.getElementById("author-id").value;

  // Call the addPerson function to add a new person (book)
  addPerson(firstName, lastName);

  // Clear and re-display the booksContainer with updated data
  displayBooks();
});
