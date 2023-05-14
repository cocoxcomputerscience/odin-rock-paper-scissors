function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];

    // generates a random number between 0-2
    let randomElement = Math.floor((Math.random() * choiceArray.length));

    return choiceArray[randomElement];
};

function getPlayerChoice(gameNumber) {
    let playerSelection = prompt(`Rock Paper Scissor. Round ${gameNumber}. Enter your choice: `, "Rock");
    playerSelection = playerSelection.toLowerCase();

    // While player selection != (rock or paper or scissors)
    while(!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        playerSelection = prompt(`Invalid choice. Round ${gameNumber}. Re-enter your choice: `, "Rock");
        playerSelection = playerSelection.toLowerCase();
    }

    return playerSelection;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie: you both chose ${playerSelection}!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "scissors" && computerSelection === "paper" ||
               playerSelection === "paper" && computerSelection === "rock") {
        return `You win: ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose: ${computerSelection} beats ${playerSelection}!`;
    }
};

function overallWinner(playerWinCount, computerWinCount) {
    if (playerWinCount > computerWinCount) {
        console.log("The overall winner is you!");
    } else if(playerWinCount < computerWinCount) {
        console.log("The overall winner is the computer!");
    } else {
        console.log("The overall winner is no one!");
    }
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;

    // playing game 5 times
    for(let i = 0; i < 5; i++) {
        let roundResult = playRound(getPlayerChoice(i + 1), getComputerChoice());

        // output the winner of the round
        console.log(roundResult);

        // tallying up who won for each round
        if (roundResult.slice(0, 7) === "You win") {
            ++playerWinCount;
        } else if (roundResult.slice(0, 8) === "You lose") {
            ++computerWinCount;
        }
    }

    // output winner of all rounds
    console.log(overallWinner(playerWinCount, computerWinCount));
};

game();
