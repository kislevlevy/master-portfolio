'use-strict';

// Imports:
import { fetchForecast } from './model.js';
import { moveMap } from './map.js';
import { numToDays } from './config.js';

// Query Selectors:
const modal = document.querySelector('.modal-forecast');
const modalMain = document.querySelector('.modal');
const overlayMain = document.querySelector('.overlay');
const searchForm = document.querySelector('.searchCityButton');
const inputCity = document.querySelector('.inputButton');

////////////////////////////////////////////////////////////////////////
// Render Message:
const renderMsg = function (ele, msg) {
  console.log(ele);
  ele.innerHTML = '';
  ele.innerHTML = `<p class="error-msg" >${msg}</p>`;
};

// Render spinner into the DOM:
const rederSpinner = function (ele) {
  ele.innerHTML = '';
  ele.innerHTML = `
    <div class="spinner-cont">
      <span style="font-size: 48px" class="spin">
        <i class="fa-solid fa-spinner"></i>
      </span>
    </div>
    `;
};

// Control Search:
const controlSearch = async function (e) {
  try {
    e.preventDefault();
    rederSpinner(modal);

    // Assing query from user input:
    const query = inputCity.value;

    // Await data from api:
    const data = await fetchForecast(query, 5);

    // position:
    modalMain.classList.add('right-bottom-position');
    modal.innerHTML = '';

    // Add forecast html to madal element:
    modal.append(forecastHtmlMarkupMaker(data));

    // Move map element to query location:
    moveMap([data.location.lat, data.location.lon + 2]);

    // Error handeling:
  } catch (err) {
    modalMain.classList.remove('right-bottom-position');
    moveMap([34, 22], 3);
    renderMsg(
      modal,
      'The requested location could not be found. Please try searching for a different location.'
    );
    console.error(err);
  }
};

// Forcast HTML markup maker:
const forecastHtmlMarkupMaker = function (data) {
  console.log(data);

  // Create div:
  const div = document.createElement('div');
  div.innerHTML = `<h3>${data.location.name}, ${data.location.country}</h3>`;

  // Add ul element to div:
  const ul = document.createElement('ul');
  ul.classList.add('forecast-table');

  // Map loop to add li to add into ul:
  data.forecast.forecastday.map((ele) => {
    // Create new li
    const li = document.createElement('li');

    // Add elements to li:
    li.innerHTML = `
        <span>${numToDays[new Date(ele.date).getDay()]}</span>
        <img src="${ele.day.condition.icon}" alt="${ele.day.condition.text}" />
        <span>${ele.day.condition.text}</span>
        <span>Max: ${ele.day.maxtemp_c}</span>
        <span>Avg: ${ele.day.avgtemp_c}</span>`;

    ul.append(li);
  });

  // Append ul to div
  div.append(ul);

  return div;
};

////////////////////////////////////////////////////////////////////////
// Event Listeners:
searchForm.addEventListener('submit', controlSearch);
modalMain.addEventListener('mouseenter', function (e) {
  overlayMain.classList.remove('opacity');
});
modalMain.addEventListener('mouseleave ', function (e) {
  overlayMain.classList.add('opacity');
  console.log(e);
});
inputCity.focus();
