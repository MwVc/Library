import { myLibrary } from "./library";
const cardsContainer = document.getElementById("cards-container");

const renderBooks = function () {
  render();
  function render() {
    let cards = "";

    for (let i = 0; i < myLibrary.length; i++) {
      cards += `<div class="card text-center my-5" data-index = "${i}">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">${myLibrary[i].title}</h5>
        <p class="card-text">By: ${myLibrary[i].author}</p>
        <a href="#" class="btn btn-primary" id = "isRead-toggle-btn">${myLibrary[i].isRead}</a>
        <a href="#" class="btn btn-danger" id = "delete-btn" data-index = "${i}">Delete Book</a>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>`;
    }

    cardsContainer.innerHTML = cards;
  }
};

export { renderBooks };
