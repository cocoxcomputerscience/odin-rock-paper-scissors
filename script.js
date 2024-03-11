function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return(computerChoice);
}

function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();

    // strings for the result
    let result;
    let win = `You win! ${playerSelection} beats ${computerSelection}`;
    let lose = `You lose! ${playerSelection} loses to ${computerSelection}`;
    let tie = `Tie! You both chose ${playerSelection}`;

    if (playerSelection === computerSelection) {
        result = tie;
    } else {
        switch (playerSelection) {
            case "rock":
                result = computerSelection === "scissors" ? win : lose;
                break;
            case "paper":
                result = computerSelection === "rock" ? win : lose;
                break;
            case "scissors":
                result = computerSelection === "paper" ? win : lose;
                break;
        }
    }

    if (result === win) playerScore++;
    if (result === lose) playerScore++;
    resultText.textContent = `${playerScore}-${computerScore}\n${result}`;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    } 
}

function endGame() {
    let endResult = document.createElement("div");
    resultText.appendChild(endResult);
    endResult.textContent = playerScore > computerScore ? "Congratulations, you win the game!" : "Sorry, the computer won this game!";

    // remove click events from the choices
    choices.forEach(choice => choice.removeEventListener("click", playRound));
}

// global counter for overall score
let playerScore = 0;
let computerScore = 0;

let resultText = document.querySelector("#result");
let choices = document.querySelectorAll("#choices button");
choices.forEach(choice => {
    choice.addEventListener("click", playRound);
});

// UPDATE:
// User now clicks on one of the buttons to initiate the game
// Display the running score and announce a winner once 5 points has been met
// playRound function will be the event handler for when a button is clicked

/*
HTML
    1. add 3 buttons for the choices
    2. add new game button


JS
event handler
    1. add event listeners to all the buttons using event delegation
    2. or use for...of or for each to 

playRound(e)
    1. playRound will now only have event object being passed as argument
       let choice = event.target.id;
    2. will call a new function if a player reaches 5 points

endGame()
    1. show the final result string (don't display round result maybe??)
    2. remove listeners from the choice buttons

LATER
EXTRA newGame()
    1. re-eneable event listeners for the choices buttons
    2. clear the string result
*/