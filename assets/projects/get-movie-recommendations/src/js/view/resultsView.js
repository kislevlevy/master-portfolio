// Imports:
"use-strict";
import View from "./view.js";

// Class:
class ResultsView extends View {
  // Variables
  mainElement = document.querySelector(".cards-cont");

  // Event listener
  addHandlerResults(handler) {
    this.mainElement.addEventListener("click", function (e) {
      if (!e.target.value) return;
      handler(e.target.value);
    });
  }

  // HTML markup maker:
  htmlMarkupMaker(data) {
    return `
    <div class="card col-6 col-sm-4 col-md-3">
        <h5>${data.Title}</h5>
        <div>
          <img src="${data.Poster}" alt="Missing Picture" />
          <h6>Year: ${data.Year}</h6>
        <div>
        <button value="${data.imdbID}">Get More Info</button>
      </div>
    `;
  }
}
export default new ResultsView();
