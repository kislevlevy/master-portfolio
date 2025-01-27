// Imports:
"use-strict";
import * as model from "./model.js";
import modalView from "./view/modalView.js";
import navView from "./view/navView.js";
import paginationView from "./view/paginationView.js";
import resultsView from "./view/resultsView.js";

// Veriables:
let currentPage;

const handleError = function (err, view, msg) {
  view.renderMessage(msg);
  console.log(err);
};

// Await search results and insert them into the DOM:
const awaitResultsByQuery = async function () {
  try {
    // Await search reasults:
    await model.getSearchResults();

    // Results to DOM:
    resultsView.renderToElement(model.state.search);

    // Pagination:
    paginationView.renderToElement([model.state]);

    // Error handeling:
  } catch (err) {
    throw err;
  }
};

// Control search logic:
const controlSearch = async function () {
  try {
    // Render spinner till data is ready:
    resultsView.rederSpinner();

    // Get user query from view:
    model.state.query = navView.getFormData();
    model.state.currentPage = 1;

    // Await search results and insert them into the DOM:
    await awaitResultsByQuery();

    // Error handeling:
  } catch (err) {
    handleError(
      err,
      resultsView,
      "We're sorry, but we couldn't find any results for your search. Please check the spelling or your filters."
    );
    paginationView.clearElement();
  }
};

const controlPagination = function (setPage) {
  const run = function () {
    resultsView.rederSpinner();
    awaitResultsByQuery(model.state.currentPage);
  };

  if (setPage === true) {
    if (model.state.currentPage !== model.state.pages) {
      model.state.currentPage++;
      run();
    }
  } else if (setPage === false) {
    if (model.state.currentPage !== 1) {
      model.state.currentPage--;
      run();
    }
  } else if (typeof setPage === "number") {
    model.state.currentPage = setPage;
    run();
  }
};

// Control results 'more info' logic:
const controlResults = async function (imdbId) {
  try {
    modalView.openModal();
    modalView.rederSpinner();

    const moreInfo = await model.getMoreInfo(imdbId);

    modalView.renderToElement([moreInfo]);
  } catch (err) {
    handleError(err, modalView, "Could not fetch more info on this title!");
  }
};

const controlCloseModal = function () {
  modalView.closeModal();
};

// Initiation:
(function () {
  navView.addHandlerSearch(controlSearch);
  resultsView.addHandlerResults(controlResults);
  paginationView.addHandlerPagination(controlPagination);
  modalView.addHandlerCloseModal(controlCloseModal);
})();
