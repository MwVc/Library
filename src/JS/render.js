import { myLibrary } from "./library";
const cardsContainer = document.getElementById("cards-container");

const renderBooks = function () {
  render();
  function render() {
    let cards = "";

    for (let i = 0; i < myLibrary.length; i++) {
      cards += `<div class="card text-center my-5" data-index = "${i}">
      <div class="card-header">
      <i>Pages: ${myLibrary[i].pages}</i>
      </div>
      <div class="card-body">
        <h5 class="card-title">${myLibrary[i].title}</h5>
        <p class="card-text">By: ${myLibrary[i].author}</p>
        <a href="#" class="btn btn-primary" id = "is-read-toggle-btn" data-index = "${i}">${myLibrary[i].isRead}</a>
        <a href="#" class="btn disabled" id = "current-page" data-index = "${i}">Update current page</a>
        <a href="#" class="btn btn-danger" id = "delete-btn" >Delete Book</a>
        
      </div>
      <div class="card-footer text-muted">
        ${myLibrary[i].timeCreated}
      </div>
    </div>`;
    }

    cardsContainer.innerHTML = cards;
  }

  const deleteButtons = document.querySelectorAll("#delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentNode.parentNode.remove();
      myLibrary.splice(button.getAttribute("data-index"), 1);
    });
  });

  const toggleReadStatusButtons = document.querySelectorAll(
    "#is-read-toggle-btn"
  );
  toggleReadStatusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const indexToToggle = parseInt(button.getAttribute("data-index"));
      myLibrary[indexToToggle].changeReadStatus();
      button.innerHTML = myLibrary[indexToToggle].isRead;
      console.log("Just changed the read status of the instance");
    });
  });

  const currentPageButtons = document.querySelectorAll("#current-page");
  currentPageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const indexOfBook = parseInt(button.getAttribute("data-index"));
    });
  });
};

export { renderBooks };
