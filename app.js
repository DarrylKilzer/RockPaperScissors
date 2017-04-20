let userChoice = '';
let computerChoice = '';
let results = '';

function gameManager() {
  computerSelection();
  compareChoices();
  gameResults();
}

function userSelection(choice) {
  userChoice = choice;
  document.getElementById("playerChose").innerText = "Your choice is " + userChoice;
  gameManager();
}

function computerSelection() {
  let min = 1;
  let max = 3;
  
  random = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("random number is " + random);

  if (random === 1) {
    computerChoice = 'rock';
  } else if (random === 2) {
    computerChoice = 'paper';
  } else if (random === 3) {
    computerChoice = 'scissors'
  }
  document.getElementById("computerChose").innerText 
  = "The Computer has chosen " + computerChoice;
}

function compareChoices() {
  if (userChoice == computerChoice) {
    results = 'Tie';
  }else if (userChoice === 'rock' && computerChoice === 'scissors'
    || userChoice === 'paper' && computerChoice === 'rock'
    || userChoice === 'scissors' && computerChoice === 'paper') {
    results = 'Win';
  } else {
    results = "lose"
  }
  return results;
}

function gameResults() {
  document.getElementById("results").innerText = 'You ' + results
}

function reset() {
  userChoice = '';
  computerChoice = '';
  results = '';
  document.getElementById("cleared").innerText
  = userChoice + computerChoice + results + "Game cleared"
}
