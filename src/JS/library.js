import { render } from "./render";

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.timeCreated = new Date();
  }

  getCurrentPage() {
    const currentPageNumber = parseInt(prompt("Enter your current page"));
    if (
      !isNaN(currentPageNumber) &&
      currentPageNumber >= 0 &&
      currentPageNumber <= this.pages
    ) {
      console.log(currentPageNumber);
      return currentPageNumber;
    } else {
      alert(`Please enter a number between 0 and ${this.pages}`);
      return null;
    }
  }

  changeReadStatus() {
    if (this.isRead === "Read") {
      this.isRead = "Not Read";
    } else {
      this.isRead = "Read";
    }
  }
}

const myLibrary = [
  new Book("A song of Ice and Fire", "George R. R. Martin", 720, "Not Read"),
  new Book("The River Between", "Ngugi wa Thiong'o", 160, "Read"),
  new Book("The River and The Source", "Margaret Ogola", 495, "Read"),
];

const addBookToLibrary = function () {
  let bookTitle = document.querySelector("#book_title").value;
  let author = document.querySelector("#author").value;
  let pages = parseInt(document.querySelector("#pages").value);
  let readStatus = document.querySelector("#exampleDataList").value;

  myLibrary.push(new Book(bookTitle, author, pages, readStatus));

  console.log(myLibrary);
};

export { addBookToLibrary, myLibrary };
