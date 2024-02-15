const validateForm = function () {
  const textRegex = /^[A-Za-z\s.,'"!?()-IVXLCDM]{1,100}$/;

  const isBookTitleValid = validateBookTitle();
  const isAuthorValid = validateAuthor();
  const isPagesValid = validatePages();
  const isReadStatusValid = validateReadStatus();

  return isBookTitleValid && isAuthorValid && isPagesValid && isReadStatusValid;
};

const validateBookTitle = function () {
  const textRegex = /^[A-Za-z\s.,'"!?()-IVXLCDM]{1,100}$/;
  const bookTitle = document.querySelector("#book_title");

  if (textRegex.test(bookTitle.value)) {
    bookTitle.style.border = "2px solid green";
    bookTitle.style.background = "#fff";
    bookTitle.style.boxShadow = "0 0 5px 1px green";
    return true;
  } else {
    bookTitle.style.border = "2px solid red";
    bookTitle.style.background = "#fdd";
    bookTitle.style.boxShadow = "0 0 5px 1px red";
    return false;
  }
};

const validateAuthor = function () {
  const textRegex = /^[A-Za-z\s.,'"!?()-IVXLCDM]{1,100}$/;
  const author = document.querySelector("#author");

  if (textRegex.test(author.value) || author.value.length !== 0) {
    author.style.border = "2px solid green";
    author.style.boxShadow = "0 0 5px 1px green";
    author.style.background = "#fff";
    return true;
  } else {
    author.style.border = "2px solid red";
    author.style.background = "#fdd";
    author.style.boxShadow = "0 0 5px 1px red";
    return false;
  }
};

const validatePages = function () {
  const pages = document.querySelector("#pages");

  if (pages.value.length == 0) {
    pages.style.border = "2px solid red";
    pages.style.background = "#fdd";
    pages.style.boxShadow = "0 0 5px 1px red";
    return false;
  } else {
    pages.style.border = "2px solid green";
    pages.style.background = "#fff";
    pages.style.boxShadow = "0 0 5px 1px green";
    return true;
  }
};

const validateReadStatus = function () {
  const readStatusInput = document.querySelector("#exampleDataList");
  const regex = /\b(?:Read|Not Read)\b/;

  if (!regex.test(readStatusInput.value) || readStatusInput.value.length == 0) {
    readStatusInput.style.border = "2px solid red";
    readStatusInput.style.background = "#fdd";
    readStatusInput.style.boxShadow = "0 0 5px 1px red";
    return false;
  } else {
    readStatusInput.style.border = "2px solid green";
    readStatusInput.style.background = "#fff";
    readStatusInput.style.boxShadow = "0 0 5px 1px green";
    return true;
  }
};

export {
  validateForm,
  validateBookTitle,
  validateAuthor,
  validatePages,
  validateReadStatus,
};
