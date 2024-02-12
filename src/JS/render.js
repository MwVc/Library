import { myLibrary } from "./library";
const cardsContainer = document.getElementById("cards-container");

const render = function () {
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

  // Get all buttons with an id attribute of "delete-btn" and store them in the deleteButtons variable
  const deletButtons = document.querySelectorAll("#delete-btn");

  // Loop through the delete buttons Nodelist
  deletButtons.forEach((button) => {
    // Pass in the event that is to be triggered when the button is clicked
    button.addEventListener("click", (event) => {
      // Retrieve the data attribute of the clicked button
      const indexToRemove = button.getAttribute("data-index");
      console.log(indexToRemove);
    });
  });

  const isReadToggleButtons = document.querySelectorAll("#isRead-toggle-btn");
};

export { render };
