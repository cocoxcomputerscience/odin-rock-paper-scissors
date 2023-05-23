function getComputerChoice() {
    const choiceArray = ["sword", "axe", "lance"];

    // generates a random integer between 0-2
    let randomElement = Math.floor((Math.random() * choiceArray.length));

    return choiceArray[randomElement];
};

// also updates wincount variable
function calculateWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "no one";
    } else if (playerSelection === "sword" && computerSelection === "axe" ||
               playerSelection === "axe" && computerSelection === "lance" ||
               playerSelection === "lance" && computerSelection === "sword") {
        playerWinCount++;
        return "player";
    } else {
        computerWinCount++;
        return "computer";
    }
}

function playRound() {
    playerSelection = this.id;
    computerSelection = getComputerChoice();

    // winner can equal "player", "computer", or "no one"
    let winner = calculateWinner(playerSelection, computerSelection);

    // will call function with winner as argument to update the scoreboard
    updateScoreboard(playerSelection, computerSelection, winner);
};

// updates the html scoreboard
function updateScoreboard(playerSelection, computerSelection, winner) {

    playerSelectionDisplay.textContent = `YOU CHOSE: ${playerSelection.toUpperCase()}`;
    computerSelectionDisplay.textContent = `AI CHOSE: ${computerSelection.toUpperCase()}`;

    if (winner === "no one") {
        resultText.textContent = "IT'S A TIE";
    }
    else {
        playerTally.textContent = playerWinCount;
        computerTally.textContent = computerWinCount;

        // once a tally hits 5, game is over
        if (playerWinCount === 5 || computerWinCount === 5) {
            resultText.textContent = `THE GAME IS OVER. THE ${winner.toUpperCase()} WINS!`
            removeListeners();
        }
        else {
            resultText.textContent = `THE WINNER IS: THE ${winner.toUpperCase()}`;
        }
    }
}

function removeListeners() {
    buttons.forEach(button => {
        button.removeEventListener("click", playRound);
    })
}

// adding click event to all the buttons
let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", playRound);
})

// global variable for keeping track of score
let playerWinCount = 0;
let computerWinCount = 0;

// scoreboard variables
let playerTally = document.querySelector("#player-tally");
let computerTally = document.querySelector("#computer-tally");
let playerSelectionDisplay = document.querySelector("#player-selection-display");
let computerSelectionDisplay = document.querySelector("#computer-selection-display");
let resultText = document.querySelector("#result-text");
let finalResultText = document.querySelector("#final-result-text");