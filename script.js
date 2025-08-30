'use strict';

console.log("Hello this is a test");

console.log(getHumanChoice());


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
    return prompt('rock, paper, scissors?','').toLowerCase();
}