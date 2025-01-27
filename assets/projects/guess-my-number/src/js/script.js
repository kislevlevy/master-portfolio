'use strict';

// Secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// Variables
let score = 20;
let highScore = 0;
let win = false;

//querySelect Variables
const numberQ = document.querySelector('.number');
const scoreQ = document.querySelector('.score');
const guessQ = document.querySelector('.guess');
const checkQ = document.querySelector('.check');
const bodyQ = document.querySelector('body');
const messageQ = document.querySelector('.message');
const highscoreQ = document.querySelector('.highscore');
const againQ = document.querySelector('.again');

// Play Again Function
const playAgain = function () {
  // Game Engine
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  // User UI
  messageQ.textContent = 'Start guessing...';
  numberQ.textContent = '?';
  scoreQ.textContent = score;
  guessQ.value = '';
  checkQ.textContent = 'Check!';

  // Style
  bodyQ.style.backgroundColor = '#222';
  numberQ.style.width = '15rem';
};

// Game Engine
function guessNum() {
  // Body Guard
  if (win) {
    win = false;
    playAgain();
    return;
  }

  // Guess Variable
  const guess = Number(guessQ.value);

  if (!guess || guess > 20 || guess < 1) {
    // No Input
    messageQ.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    // Good Guess
    win = true;
    messageQ.textContent = '🎊 Correct Number!';
    checkQ.textContent = 'Again!';
    bodyQ.style.backgroundColor = '#60b347';
    numberQ.style.width = '30rem';
    numberQ.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highscoreQ.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // Wrong Guess
    win = false;
    if (score > 1) {
      messageQ.textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      scoreQ.textContent = score;
    } else {
      // Lose The Game
      messageQ.textContent = '💥 You lost the gmae!';
      scoreQ.textContent = 0;
    }
  }
}

// Again Button
againQ.addEventListener('click', playAgain);

// Game Engine
checkQ.addEventListener('click', guessNum);
