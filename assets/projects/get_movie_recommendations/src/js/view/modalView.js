// Imports:
"use-strict";
import View from "./view.js";

// Class:
class ModalView extends View {
  // Variables
  mainElement = document.querySelector(".modal-cont");
  modal = document.querySelector(".modal");
  overlay = document.querySelector(".overlay");

  // Event listener
  addHandlerCloseModal(handler) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") handler();
    });
    this.overlay.addEventListener("click", function (e) {
      if (e.target.value === "close-modal") handler();
      if (e.target.className.includes("overlay")) handler();
    });
  }

  // HTML markup maker:
  htmlMarkupMaker(data) {
    return `
    <div class="more-info-card" >
            <h4>${data.Title}</h4>
            <img src="${data.Poster}" alt="Missing Picture" />
            <h5>More Info:</h5>
            <div class="more-info-card-info">
                <ul>
                    <li>Released</li>
                    <li>${data.Released}</li>
                </ul>
                <ul>
                    <li>Rated</li>
                    <li>${data.Rated}</li>
                </ul>
                <ul>
                    <li>Genre</li>
                    <li>${data.Genre}</li>
                </ul>
                <ul>
                    <li>Runtime</li>
                    <li>${data.Runtime}</li>
                </ul>
            </div>
            <h5>Rating:</h5>
            <div>
                <span>IMDB - ${data.imdbRating}</span></br>
                <span>Rotten Tomatoes - ${data.Ratings[1].Value}</span>
            </div>
            <h5>Plot:</h5>
            <div>
                <p>${data.Plot}</p>
            </div>
            <a href="https://www.imdb.com/title/${data.imdbID}/"><button>Read more on IMDB</button></a>
        </div>
    `;
  }

  openModal() {
    this.modal.classList.remove("hidden");
    this.overlay.classList.remove("hidden");

    this.mainElement.scrollIntoView({ behavior: "instant" });
  }

  closeModal() {
    // animate the transition and hide the element:
    this.animateEl(this.modal, "zoom-out", "hidden");
    this.animateEl(this.overlay, "zoom-out", "hidden");
  }
}
export default new ModalView();
