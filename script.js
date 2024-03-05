function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return(computerChoice);
}

// will play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // strings for the result
    let result;
    let win = `You win! ${playerSelection} beats ${computerSelection}`;
    let lose = `You lose! ${playerSelection} loses to ${computerSelection}`;
    let tie = `Tie! You both chose ${playerSelection}`;

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return tie;
    }
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

    (result === win) ? playerScore++ : computerScore++;
    return result;
}

// will play 5 rounds of Rock Paper Scissors
function playGame() {
    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Input rock, paper, or scissors", "rock");
        let computerChoice = getComputerChoice();
        let roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);
    }

    // overall score
    if (playerScore > computerScore) {
        console.log(`${playerScore}-${computerScore} The player wins the game!`);
    } else if (playerScore < computerScore) {
        console.log(`${playerScore}-${computerScore} The player loses the game!`);
    } else {
        console.log(`${playerScore}-${computerScore} Tie!`);
    }
}

// global counter for overall score
let playerScore = 0;
let computerScore = 0;

playGame();
