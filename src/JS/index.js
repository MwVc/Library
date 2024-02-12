// Import our custom css
import "../scss/style.scss";

// Import all of bootstrap's JS
import * as bootstrap from "bootstrap";
import {
  validateForm,
  validateBookTitle,
  validateAuthor,
  validatePages,
  validateReadStatus,
} from "./validate";
import { addBookToLibrary } from "./library";
import { render } from "./render";

render();

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#book_title")
    .addEventListener("input", validateBookTitle);
  document.querySelector("#author").addEventListener("input", validateAuthor);
  document.querySelector("#pages").addEventListener("input", validatePages);
  document
    .querySelector("#exampleDataList")
    .addEventListener("input", validateReadStatus);
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  if (!validateForm()) {
    event.preventDefault();
    console.log("The form is not submitting");
  } else {
    addBookToLibrary();
    console.log("The form has submitted succesfully");
    render();

    form.reset();
  }
});

// const myLibrary = [
//   {
//     title: "A song of Ice and Fire",
//     author: "George R. R. Martin",
//     pages: 720,
//     isRead: "Not Read",
//   },
//   {
//     title: "The River Between",
//     author: "Ngugi Wa Thion'go",
//     pages: 150,
//     isRead: "Read",
//   },
//   {
//     title: "The River and The Source",
//     author: "Margaret Ogola",
//     pages: 495,
//     isRead: "Read",
//   },
// ];

// Book class for creating instances of books
// class Book {
//   constructor(title, author, pages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
//   }
// }
