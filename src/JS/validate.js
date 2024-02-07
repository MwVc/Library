export const validate = function () {
  const form = document.querySelector("form");
  const bookTitle = document.querySelector("#book_title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");

  const textRegex = /^[A-Za-z\s.,'"!?()-IVXLCDM]{1,100}$/;

  //   window.addEventListener("load", () => {
  //     const isValid =
  //       bookTitle.value.length === 0 || bookTitleRegex.test(bookTitle.value);

  //     bookTitle.style.border = isValid ? "" : "2px red solid";
  //   });

  bookTitle.addEventListener("input", () => {
    const isValid =
      bookTitle.value.length === 0 || textRegex.test(bookTitle.value);

    if (isValid) {
      bookTitle.style.border = "2px solid green";
    } else {
      bookTitle.style.border = "2px solid red";
    }
  });

  author.addEventListener("input", () => {
    const isValid = author.value.length === 0 || textRegex.test(author.value);

    if (isValid) {
      author.style.border = "2px solid green";
    } else {
      author.style.border = "2px solid red";
    }
  });
};
