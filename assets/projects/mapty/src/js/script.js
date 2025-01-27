'use strict';
///////////////////////////////////////////////////////////
// Query selectors:
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

///////////////////////////////////////////////////////////
// Workout class:
class Workout {
  date = new Date();
  id = this.date.getTime();

  constructor(coords, distance, duration) {
    this.coords = coords; // [latitude, longitude]
    this.distance = distance; // in km
    this.duration = duration; // in minutes
  }

  setDiscription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const name = this.type[0].toUpperCase() + this.type.slice(1);

    return `${name} on ${months[this.date.getMonth()]}, ${this.date.getDate()}`;
  }
}

///////////////////////////////////////////////////////////
// Running class:
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.discription = this.setDiscription();
    this.pace = duration / distance;
  }
}

///////////////////////////////////////////////////////////
// Cycling class:
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.discription = this.setDiscription();
    this.speed = distance / (duration / 60);
  }
}

///////////////////////////////////////////////////////////
// Main APP class:
class App {
  // Private veriables:
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 17;

  constructor() {
    // Get user current possition:
    this.#getPosition();

    // Grab local storage data:
    this.#getLocalStorage();
    // Event listeners:
    form.addEventListener('submit', this.#newWorkout.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField);
    containerWorkouts.addEventListener('click', this.moveToWorkout.bind(this));
  }

  // Get position with browser API:
  #getPosition() {
    navigator.geolocation.getCurrentPosition(this.#loadMap.bind(this), function () {
      alert('Could not get you GPS location');
    });
  }

  ///////////////////////////////////////////////////////////
  // Load map with position:
  #loadMap(position) {
    // Restructure  coordinates:
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    // Leaflet map load:
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // Leaflet map theme:
    L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png',
      {}
    ).addTo(this.#map);

    // Leaflet click on map event:
    this.#map.on('click', this.#showForm.bind(this));

    this.#workouts.forEach((workout) => this.#renderMarker(workout));
    document
      .getElementsByClassName('leaflet-control-attribution')
      .item(0).innerHTML = '';
  }

  ///////////////////////////////////////////////////////////
  // Reveal submit form
  #showForm(e) {
    this.#mapEvent = e;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #hideForm() {
    // prettier-ignore
    const formArr = [inputDistance,inputDuration,inputCadence,inputElevation];
    formArr.forEach((input) => {
      input.value = '';
      input.blur();
    });

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  ///////////////////////////////////////////////////////////
  // Type of activaty change at form:
  #toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  ///////////////////////////////////////////////////////////
  // Create new workout:
  #newWorkout(e) {
    e.preventDefault();
    let workout;

    // get data from form:
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    // Coordinates for click:
    const { lat, lng } = this.#mapEvent.latlng;
    const coords = [lat, lng];

    // Guard - check for valid input:
    const isValidInput = (...inputs) =>
      inputs.every((input) => Number.isFinite(input));
    const isPositiveInput = (...inputs) =>
      inputs.every((input) => (input > 0 ? true : false));

    ///////////////////////////////////////////////////////////
    // Craate object running:
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // Guard
      if (
        !isValidInput(distance, duration, cadence) ||
        !isPositiveInput(distance, duration, cadence)
      )
        return alert('inputs have to be positive numbers!');

      // New object from class + add new object to array
      workout = new Running(coords, distance, duration, cadence);
    }

    ///////////////////////////////////////////////////////////
    // Craate object cycling:
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      // Guard
      if (
        !isValidInput(distance, duration, elevation) ||
        !isPositiveInput(distance, duration)
      )
        return alert('inputs have to be positive numbers!');

      // New object from class
      workout = new Cycling(coords, distance, duration, elevation);
    }

    // Add new object to array:
    this.#workouts.push(workout);

    // Display marker at:
    this.#renderMarker(workout);

    // add workout on UI list:
    this.#renderList(workout);

    // Clean up and hide form:
    this.#hideForm();

    // Store all workouts in local storage:
    this.#setLocalStorage();
  }

  ///////////////////////////////////////////////////////////
  // Display marker at:
  #renderMarker(workout) {
    const type = workout.type === 'running';

    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 200,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${type ? '🏃‍♂️' : '🚴‍♀️'} ${workout.discription}`)
      .openPopup();
  }

  ///////////////////////////////////////////////////////////
  // Render workout at UI list:
  #renderList(workout) {
    const type = workout.type === 'running';
    let html = `
           <li class="workout workout--${workout.type}" data-id="${workout.id}">
              <h2 class="workout__title">${workout.discription}</h2>
              <div class="workout__details">
                <span class="workout__icon">${type ? '🏃‍♂️' : '🚴‍♀️'}</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
              </div>
              `;
    if (type)
      html += `
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(2)}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
              </div>
            </li>
            `;
    if (!type)
      html += `
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed}</span>
                <span class="workout__unit">km/h</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.elevation}</span>
                <span class="workout__unit">m</span>
              </div>
    `;
    form.insertAdjacentHTML('afterend', html);
  }

  // Link to place on map
  moveToWorkout(e) {
    //
    const workoutElement = e.target.closest('.workout');
    if (!workoutElement) return;

    // find workout in workouts array
    const workout = this.#workouts.find(
      (element) => element.id == workoutElement.dataset.id
    );

    // Set view for selcted worout
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });
  }

  ///////////////////////////////////////////////////////////
  // Local Storage:
  #setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  #getLocalStorage() {
    // Load workouts when finished loading
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach((workout) => this.#renderList(workout));
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}
const app = new App();
