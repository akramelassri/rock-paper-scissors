'use strict';


playGame();


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    let gameResultSentence;
    if (humanScore > computerScore) {
        gameResultSentence = 'You win!';
    } else if (humanScore < computerScore) {
        gameResultSentence = 'You Lose!';
    } else {
        gameResultSentence = 'Tie!';
    }
    alert(`${gameResultSentence}
            Your Score: ${humanScore}.
            Computer Score: ${computerScore}.`);

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log(`Tie! ${humanChoice} vs ${computerChoice}`);
            return;
        }
        if (humanChoice == 'rock' && computerChoice == 'paper' ||
            humanChoice == 'paper' && computerChoice == 'scissors' ||
            humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            return;
        }
        if (computerChoice == 'rock' && humanChoice == 'paper' ||
            computerChoice == 'paper' && humanChoice == 'scissors' ||
            computerChoice == 'scissors' && humanChoice == 'rock') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            return;
        }
    }

}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function getHumanChoice() {
    return prompt('rock, paper, scissors?', '').toLowerCase();
}