const myLibrary = [
  {
    title: "A song of Ice and Fire",
    author: "George R. R. Martin",
    pages: 720,
    isRead: "Not Read",
  },
  {
    title: "The River Between",
    author: "Ngugi Wa Thion'go",
    pages: 150,
    isRead: "Read",
  },
  {
    title: "The River and The Source",
    author: "Margaret Ogola",
    pages: 495,
    isRead: "Read",
  },
];

// DOM elements
const myForm = document.getElementById("myForm");
const tableBody = document.getElementById("table-body");

// Event Listeners
myForm.addEventListener("submit", addBookToLibrary);

renderBooks();

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(event) {
  event.preventDefault();

  let bookTitle = document.getElementById("book_title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readStatus = document.getElementById("read").value;

  myLibrary.push(new Book(bookTitle, author, pages, readStatus));
  renderBooks();
}

function renderBooks() {
  //Creating toBeRndered variable to manipulate the DOM only once instead of each loop
  let toBeRendered = "";

  for (let i = 0; i < myLibrary.length; i++) {
    toBeRendered += `<tr class = "u-full-width" id = "table-row" data-index = "${i}"><td>${myLibrary[i].title}</td><td>${myLibrary[i].author}</td><td>${myLibrary[i].pages}</td><td>${myLibrary[i].isRead}</td><td><button class = "button-primary" id = "delete-btn" data-index = "${i}">Delete</button></td>`;

    tableBody.innerHTML = toBeRendered;
  }
}

// Get all buttons with id attribute of "delete-btn" and store them in the deleteButtons variable
const deleteButtons = document.querySelectorAll("#delete-btn");

// Loop through the deleteButtons nodelist
deleteButtons.forEach(function (button) {
  // pass in the event which contains information about the event that is to  triggered when the button is clicked
  button.addEventListener("click", function (event) {
    // Retrieving the value of data attribute of the clicked button
    const indexToRemove = event.target.dataset.index;
    // Check if the "indexToRemove" is defined
    if (indexToRemove !== undefined) {
      myLibrary.splice(indexToRemove, 1); // Removing the element from the myLibrary array
      renderBooks();
    }
  });
});
