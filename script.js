function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return(computerChoice);
}

function playRound(e) {
    let playerSelection = e.currentTarget.id;
    let computerSelection = getComputerChoice();
    let result;
    let win = `You win! ${playerSelection.at(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    let lose = `You lose! ${playerSelection.at(0).toUpperCase() + playerSelection.slice(1)} loses to ${computerSelection}`;
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
    displayRound(result, win, lose, playerSelection, computerSelection);
    if (playerScore === 5 || computerScore === 5) endGame();
}

function displayRound(result, win, lose, playerSelection, computerSelection) {
    if (result === win) {
        playerScore++;
        computerHealthBar.value -= 1;
        playerChoiceBox.style.backgroundColor = "green";
        computerChoiceBox.style.backgroundColor = "red";
    } else if (result === lose) {
        computerScore++;
        playerHealthBar.value -= 1; 
        playerChoiceBox.style.backgroundColor = "red";
        computerChoiceBox.style.backgroundColor = "green";
    } else {
        playerChoiceBox.style.backgroundColor = "yellow";
        computerChoiceBox.style.backgroundColor = "yellow";
    }
    roundResult.textContent = `${result}`;
    playerChoiceBox.style.backgroundImage = `url(./images/${playerSelection}.png)`;
    computerChoiceBox.style.backgroundImage = `url(./images/${computerSelection}.png)`;
}

function endGame() {
    gameResult.textContent = playerScore > computerScore ? "Congratulations, you win the game!" : "Sorry, the computer wins the game!";
    choices.forEach(choice => choice.removeEventListener("click", playRound));
    newGameButton.style.display = "block";
}

function newGame() {
    newGameButton.style.display = "none";
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    gameResult.textContent = "";
    choices.forEach(choice => {
        choice.addEventListener("click", playRound);
    });
    playerHealthBar.value = 5;
    computerHealthBar.value = 5; 
    playerChoiceBox.style.background = "#fb5607";
    computerChoiceBox.style.background = "#fb5607";
}

let playerScore = 0;
let computerScore = 0;
let roundResult = document.querySelector("#round-result");
let gameResult = document.querySelector("#game-result");
let choices = document.querySelectorAll("#choice-container button");
let newGameButton = document.querySelector("#new-game-button");
let playerHealthBar = document.querySelector("#player-hp-bar");
let computerHealthBar = document.querySelector("#computer-hp-bar");
let playerChoiceBox = document.querySelector("#player-choice");
let computerChoiceBox = document.querySelector("#computer-choice");

choices.forEach(choice => {
    choice.addEventListener("click", playRound);
});
newGameButton.addEventListener("click", newGame);