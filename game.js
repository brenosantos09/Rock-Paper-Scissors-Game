'use strict';

const playerChoices = document.querySelectorAll('[data-attribute]');
const result = document.querySelector('#game_Result');
const displayPlayerOption = document.querySelector('#player-option');
const displayComputerOption = document.querySelector('#computer-option');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const buttonResetGame = document.querySelector('#btn-reset');

const gameOptions = ['pedra', 'papel', 'tesoura'];
let pcScorePoints = 0;
let playerScorePoints = 0;

//get player selection and send to playGame function
playerChoices.forEach((playerChoice) => {
  playerChoice.addEventListener('click', () => {
    const playerOption = playerChoice.getAttribute('data-attribute');
    playGame(playerOption);
  });
});

//generate a random choice from the available game options
function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * gameOptions.length);
  const randomChoice = gameOptions[randomIndex];
  return randomChoice;
}

//compare player choice with a random computer choice to determine the winner
function playGame(player) {
  const randomComputerChoice = getRandomChoice();
  displayComputerOption.textContent = randomComputerChoice;
  displayPlayerOption.textContent = player;
  console.log(randomComputerChoice);
  if (player === randomComputerChoice) {
    result.textContent = 'Empate';
  } else if (
    (player === 'pedra' && randomComputerChoice === 'papel') ||
    (player === 'tesoura' && randomComputerChoice === 'pedra') ||
    (player === 'papel' && randomComputerChoice === 'tesoura')
  ) {
    result.textContent = 'Computador Ganhou a Rodada';
    pcScorePoints += 1;
    computerScore.textContent = pcScorePoints;
  } else {
    result.textContent = 'Você ganhou essa Rodada';
    playerScorePoints += 1;
    playerScore.textContent = playerScorePoints;
  }
  checkWinner(playerScorePoints, pcScorePoints);
}

function checkWinner(player, computer) {
  if (player === 5) {
    result.textContent = 'Você ganhou o Jogo.';
    buttonResetGame.classList.add('active');
    resetGame();
  } else if (computer === 5) {
    result.textContent = 'Computador ganhou o Jogo';
    buttonResetGame.classList.add('active');
    resetGame();
  }
}

function resetGame() {
  buttonResetGame.addEventListener('click', () => {
    location.reload();
  });
  playerChoices.forEach((buttons) => {
    buttons.disabled = true;
  });
}
