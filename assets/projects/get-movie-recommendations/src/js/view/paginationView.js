// Imports:
"use-strict";
import View from "./view.js";

// Class:
class NavView extends View {
  // Variables
  mainElement = document.querySelector(".pagination-cont");
  pages;

  htmlMarkupMaker(data) {
    return `
    <div>
      <button value="p-pre" >Previus</button>
      <input id="jump-to-page" type="number" min="1" max="${data.pages}" step="1" placeholder="Jump to page">
      <button value="p-nxt">Next</button>
    </div>
    <h5>${data.results} Results in ${data.pages} Pages</h5>
    <h5>Currently on page ${data.currentPage}</h5>
`;
  }

  addHandlerPagination(handler) {
    this.mainElement.addEventListener("click", function (e) {
      const value = e.target.value;
      if (value === "p-pre") return handler(false);
      if (value === "p-nxt") return handler(true);
    });

    this.mainElement.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" || e.target.localName !== "input") return;

      if (e.target.valueAsNumber > this.pages || e.target.valueAsNumber < 1)
        return;
      else return handler(e.target.valueAsNumber);
    });
  }
}
export default new NavView();

const ex = {
  Search: [
    {
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      Year: "2011",
      imdbID: "tt1201607",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
  ],
  totalResults: "219",
  Response: "True",
};
