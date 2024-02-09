class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

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

const addBookToLibrary = function () {
  const bookTitle = document.querySelector("#book_title").value;
  const author = document.querySelector("#author").value;
  const pages = parseInt(document.querySelector("#pages").value);
  const readStatus = document.querySelector("#exampleDataList").value;

  myLibrary.push(new Book(bookTitle, author, pages, readStatus));

  console.log(myLibrary);
};

export { addBookToLibrary };
