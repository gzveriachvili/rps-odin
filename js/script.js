// 1. Does your program have a user interface? What will it look like? What functionality will the interface have?  No UI
// 2. What inputs will your program have? Will the user enter data or will you get input from somewhere else?
// Input from the user, one out of three accepted strings at a time. The computer will pick one randomly.
// 3. What is the desired output?
// The user should be notified whether or not the round was won
// 4. Given your inputs, what are the steps necessary to return the desired output?
// Create a function that generates a random pick for the computer
// Create a function that takes two parameters, the player's pick and the string generated by the computer, and then return the result
// Function that iterates the previous process 5 times and keeps track of the score

//Generate a random number between 0 and 2 and store it in a variable
//Create a variable which holds the string (the computer's pick)
//If the random number is 0 then set this variable's value to 'rock', if it's 1 then...
//Return the string variable containing the computer's pick

let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector('#btn-rock');

btnRock.addEventListener('click', () => {
  const playerSelection = 'rock';
  var sound = document.getElementById('audio');
  sound.play();
  sound.currentTime = 0;
  btnRock.classList.add('click-scale');

  const playerSide = document.querySelector('.player-side');
  const playerIcon = document.querySelector('.player-side i:first-child');
  playerIcon.remove();

  const newPIcon = document.createElement('i');
  newPIcon.classList.add('fas', 'fa-fist-raised');
  playerSide.prepend(newPIcon);
  newPIcon.setAttribute('style', 'color:chartreuse; transform: rotate(90deg)');

  playRound(computerPlay(), playerSelection);
});

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
  const playerSelection = 'paper';
  var sound = document.getElementById('audio');
  sound.play();
  sound.currentTime = 0;
  btnPaper.classList.add('click-scale');

  const playerSide = document.querySelector('.player-side');
  const playerIcon = document.querySelector('.player-side i:first-child');
  playerIcon.remove();
  const newPIcon = document.createElement('i');
  newPIcon.classList.add('fas', 'fa-hand-spock');
  playerSide.prepend(newPIcon);
  newPIcon.setAttribute('style', 'color:#f9f806; transform: rotate(90deg)');

  playRound(computerPlay(), playerSelection);
});

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
  const playerSelection = 'scissors';
  var sound = document.getElementById('audio');
  sound.play();
  sound.currentTime = 0;
  btnScissors.classList.add('click-scale');

  const playerSide = document.querySelector('.player-side');
  const playerIcon = document.querySelector('.player-side i:first-child');
  playerIcon.remove();
  const newPIcon = document.createElement('i');
  newPIcon.classList.add('fas', 'fa-hand-peace');
  playerSide.prepend(newPIcon);
  newPIcon.setAttribute('style', 'color:#ff3076; transform: rotate(90deg)');

  playRound(computerPlay(), playerSelection);
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('click-scale');
}

const buttons = document.querySelectorAll('.play-buttons button');
buttons.forEach((button) =>
  button.addEventListener('transitionend', removeTransition)
);

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerPick;

  if (randomNumber == 0) {
    computerPick = 'Rock';
  } else if (randomNumber == 1) {
    computerPick = 'Paper';
  } else {
    computerPick = 'Scissors';
  }
  return computerPick;
}

//Making sure that the inputs are case insensitive
//How many possible outcomes are there?

function playRound(computer, player) {
  computer = computer.toLowerCase();
  player = player.toLowerCase();
  let result;

  const cpuSide = document.querySelector('.cpu-side');
  const cpuIcon = document.querySelector('.cpu-side i:first-child');

  if (computer === 'rock') {
    cpuIcon.remove();
    const newCIcon = document.createElement('i');
    newCIcon.classList.add('fas', 'fa-fist-raised');
    cpuSide.prepend(newCIcon);
    newCIcon.setAttribute(
      'style',
      'color:chartreuse; transform: rotate(-90deg)'
    );
  } else if (computer === 'paper') {
    cpuIcon.remove();
    const newCIcon = document.createElement('i');
    newCIcon.classList.add('fas', 'fa-hand-spock');
    cpuSide.prepend(newCIcon);
    newCIcon.setAttribute('style', 'color:#f9f806; transform: rotate(-90deg)');
  } else {
    cpuIcon.remove();
    const newCIcon = document.createElement('i');
    newCIcon.classList.add('fas', 'fa-hand-peace');
    cpuSide.prepend(newCIcon);
    newCIcon.setAttribute('style', 'color:#ff3076; transform: rotate(-90deg)');
  }

  if (computer === 'rock' && player === 'rock') {
    result = 'Draw!';
  } else if (computer === 'rock' && player === 'paper') {
    result = 'Player wins! Paper beats rock.';
  } else if (computer === 'rock' && player === 'scissors') {
    result = 'Computer wins! Rock beats scissors.';
  } else if (computer === 'paper' && player === 'paper') {
    result = 'Draw!';
  } else if (computer === 'paper' && player === 'rock') {
    result = 'Computer wins! Paper beats rock.';
  } else if (computer === 'paper' && player === 'scissors') {
    result = 'Player wins! Scissors beat paper.';
  } else if (computer === 'scissors' && player === 'scissors') {
    result = 'Draw';
  } else if (computer === 'scissors' && player === 'rock') {
    result = 'Player wins! Rock beats scissors.';
  } else {
    result = 'Computer wins! Scissors beat paper.';
  }

  const PS = document.querySelector('#player-score');
  const CS = document.querySelector('#cpu-score');
  const whoWon = document.querySelector('.instructions p');

  if (result.charAt(0) === 'P') {
    playerScore++;
    PS.textContent = playerScore;
    whoWon.textContent = 'Player won!';
  } else if (result.charAt(0) === 'C') {
    computerScore++;
    CS.textContent = computerScore;
    whoWon.textContent = 'Computer won!';
  } else {
    whoWon.textContent = 'Draw!';
  }

  if (playerScore == 5) {
    playerScore = 0;
    computerScore = 0;

    PS.textContent = playerScore;
    CS.textContent = computerScore;

    const playerSide = document.querySelector('.player-side');
    const playerIcon = document.querySelector('.player-side i:first-child');
    playerIcon.remove();
    const newPIcon = document.createElement('i');
    newPIcon.classList.add('fas', 'fa-user');
    playerSide.prepend(newPIcon);

    const cpuSide = document.querySelector('.cpu-side');
    const cpuIcon = document.querySelector('.cpu-side i:first-child');
    cpuIcon.remove();
    const newCIcon = document.createElement('i');
    newCIcon.classList.add('fas', 'fa-tv');
    cpuSide.prepend(newCIcon);

    newPIcon.setAttribute('style', 'color:#66ff00');
    newCIcon.setAttribute('style', 'color:red;');

    whoWon.textContent = 'Player achieved 5 points first!';
  } else if (computerScore == 5) {
    playerScore = 0;
    computerScore = 0;

    PS.textContent = playerScore;
    CS.textContent = computerScore;

    const playerSide = document.querySelector('.player-side');
    const playerIcon = document.querySelector('.player-side i:first-child');
    playerIcon.remove();
    const newPIcon = document.createElement('i');
    newPIcon.classList.add('fas', 'fa-user');
    playerSide.prepend(newPIcon);

    const cpuSide = document.querySelector('.cpu-side');
    const cpuIcon = document.querySelector('.cpu-side i:first-child');
    cpuIcon.remove();
    const newCIcon = document.createElement('i');
    newCIcon.classList.add('fas', 'fa-tv');
    cpuSide.prepend(newCIcon);

    newPIcon.setAttribute('style', 'color:red;');
    newCIcon.setAttribute('style', 'color:#66ff00');
    whoWon.textContent = 'Computer achieved 5 points first!';
  }
}
