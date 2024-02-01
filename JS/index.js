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

// Book class for creating instances of books
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// A function that collects information from the form, calling the Book class creating instances of the books
function addBookToLibrary(event) {
  event.preventDefault(); // Prevents the form from submitting and reload the page

  let bookTitle = document.getElementById("book_title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readStatus = document.getElementById("read").value;

  myLibrary.push(new Book(bookTitle, author, pages, readStatus));
  renderBooks();
}

function renderBooks() {
  //Creating toBeRendered variable to manipulate the DOM only once instead of each loop
  let toBeRendered = "";

  for (let i = 0; i < myLibrary.length; i++) {
    toBeRendered += `<tr class = "u-full-width" id = "table-row" data-index = "${i}"><td>${myLibrary[i].title}</td><td>${myLibrary[i].author}</td><td>${myLibrary[i].pages}</td><td><button id="read-status" data-index = "${i}">${myLibrary[i].isRead}</button></td><td><button class = "button-primary" id = "delete-btn" data-index = "${i}">Delete</button></td>`;
  }

  tableBody.innerHTML = toBeRendered;

  // Get all buttons with id attribute of "delete-btn" and store them in the deleteButtons variable
  const deleteButtons = document.querySelectorAll("#delete-btn");

  // Loop through the deleteButtons Nodelist
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

  // Adding a button on each book’s display to change its read status.
  const toggleReadButtons = document.querySelectorAll("#read-status");

  toggleReadButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const indexToToggle = event.target.dataset.index;
      if (indexToToggle !== undefined) {
        if (myLibrary[indexToToggle].isRead === "Read") {
          myLibrary[indexToToggle].isRead = "Not Read";
        } else {
          myLibrary[indexToToggle].isRead = "Read";
        }
        renderBooks();
      }
    });
  });
}
