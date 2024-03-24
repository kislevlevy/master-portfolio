'use strict';

//Variables
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const dicePic = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game Vatiables

const playerchange = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, gameRunning;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameRunning = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dicePic.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

//Engine
btnRoll.addEventListener('click', function () {
  if (gameRunning) {
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    dicePic.classList.remove('hidden');
    dicePic.src = `dice-${diceRandom}.png`;

    if (diceRandom !== 1) {
      currentScore += diceRandom;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      playerchange();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameRunning) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      gameRunning = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dicePic.classList.add('hidden');
    } else {
      playerchange();
    }
  }
});

btnNew.addEventListener('click', init);
