'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBackgroundColor = function (colorCode) {
  document.querySelector('body').style.backgroundColor = colorCode;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const changeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('❌ No number!');

    //When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    changeBackgroundColor('#60b347');
    displaySecretNumber(secretNumber);
    changeNumberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When the player guesses wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⏫ Too high!' : '⏬ Too low!');
      score--;
      changeScore(score);
    } else {
      displayMessage('😭 You lost the game!');
      changeScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  displaySecretNumber('?');
  document.querySelector('.guess').value = '';
  changeScore(score);
  changeNumberWidth('15rem');
  changeBackgroundColor('#222');
});
