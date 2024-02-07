// Import our custom css
import "../scss/style.scss";

// Import all of bootstrap's JS
import * as bootstrap from "bootstrap";
import { validate } from "./validate";

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

// Book class for creating instances of books
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}
