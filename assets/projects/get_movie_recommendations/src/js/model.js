// Imports:
"use-strict";
import { MOVIE_DB_SECRET, MOVIE_DB_URL } from "./config.js";

// State
export const state = {
  query: {},
  search: [],
  currentPage: 1,
  results: 0,
  pages: 0,
};

// Call API:
const callApi = async function (urlData) {
  try {
    // Veriables and add secret to url
    let data;
    const url = `${MOVIE_DB_URL}?apikey=${MOVIE_DB_SECRET}${urlData}`;

    // Fetch from API:
    await fetch(url)
      .then((res) => res.json())
      .then((res) => (data = res));

    // Return data:
    return data;

    // Error handeling:
  } catch (err) {
    throw err;
  }
};

// Set state:
const setState = function (data) {
  state.search = data.Search;
  state.results = Number(data.totalResults);
  state.pages =
    Math.trunc(state.results / 10) === state.results / 10
      ? state.results / 10
      : Math.trunc(state.results / 10) + 1;
};

// Get search results from API logic:
export const getSearchResults = async function () {
  try {
    // Make search query usable
    const search = encodeURI(state.query.query.trim());

    // Contruct URL
    let urlData = `&s=${search}&page=${state.currentPage}`;
    if (state.query.year) urlData += `&y=${state.query.year}`;
    if (state.query.type === "movie" || state.query.type === "series")
      urlData += `&type=${state.query.type}`;

    // return data:
    return setState(await callApi(urlData));

    // Error handeling:
  } catch (err) {
    throw err;
  }
};

export const getMoreInfo = async function (imdbId) {
  try {
    const urlData = `&i=${imdbId}`;

    return await callApi(urlData);
  } catch (err) {
    throw err;
  }
};
