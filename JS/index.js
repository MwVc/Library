const myLibrary = [];

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", addBookToLibrary);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    let read;
    if (isRead === true) {
      read = "read";
    } else {
      read = "not read yet";
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`;
  };
}

function addBookToLibrary(event) {
  event.preventDefault();

  let bookTitle = document.getElementById("book_title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  new Book(bookTitle, author, pages);
}
