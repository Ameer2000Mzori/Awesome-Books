function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("booksData");
  if (storedData) {
    booksObject = JSON.parse(storedData);
  }
}

function saveDataToLocalStorage() {
  localStorage.setItem("booksData", JSON.stringify(booksObject));
}

loadDataFromLocalStorage();
// Save data to local storage after updating
saveDataToLocalStorage();
