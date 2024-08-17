// Imports:
"use-strict";
import View from "./view.js";

// Class:
class NavView extends View {
  // Variables
  mainElement = document.querySelector(".search");

  // Event listener:
  addHandlerSearch(handler) {
    this.mainElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  // Pull form data from DOM:
  getFormData() {
    const arr = this.mainElement.childNodes;

    return {
      query: arr[1].value,
      year: arr[3].value,
      type: arr[5].value,
    };
  }
}
export default new NavView();
