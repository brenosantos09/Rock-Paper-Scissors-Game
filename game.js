const playerChoices = document.querySelectorAll('[data-attribute]');
const result = document.querySelector('#game_Result');
const displayPlayerOption = document.querySelector('#playerOption');
const displayComputerOption = document.querySelector('#computerOption');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

const gameOptions = ['pedra', 'papel', 'tesoura'];
let pcScore = 0;
let PLscore = 0;

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
    result.textContent = 'Computador Venceu!';
  } else {
    result.textContent = 'Você Venceu!';
  }
}
