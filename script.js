function getComputerChoice() {
    const choiceArray = ["sword", "axe", "lance"];

    // generates a random integer between 0-2
    let randomElement = Math.floor((Math.random() * choiceArray.length));

    return choiceArray[randomElement];
};

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

    // will call function with the player choice, computer choice, and the winner as arguments to update the scoreboard
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
            // unhide reset button
            resetButton.removeAttribute("hidden");
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

// adding click event to all the weapon buttons
let buttons = document.querySelectorAll("#weapons button");
buttons.forEach(button => {
    button.addEventListener("click", playRound);
})

// adding click event to reset button
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
    // reset all variables and textContents
    playerWinCount = 0;
    computerWinCount = 0;
    playerTally.textContent = 0;
    computerTally.textContent = 0;
    playerSelectionDisplay.textContent = "YOU CHOSE:";
    computerSelectionDisplay.textContent = "AI CHOSE:";
    resultText.textContent = "";

    // hiding reset button and re-adding event listeners for weapon buttons
    resetButton.setAttribute("hidden", true);
    buttons.forEach(button => {
        button.addEventListener("click", playRound);
    })
})

// global variables for keeping track of score
let playerWinCount = 0;
let computerWinCount = 0;

// result section variables
let playerTally = document.querySelector("#player-tally");
let computerTally = document.querySelector("#computer-tally");
let playerSelectionDisplay = document.querySelector("#player-selection-display");
let computerSelectionDisplay = document.querySelector("#computer-selection-display");
let resultText = document.querySelector("#result-text");
let finalResultText = document.querySelector("#final-result-text");