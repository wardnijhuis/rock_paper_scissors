const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

    const randNum = Math.floor(Math.random() * 3);

    return choices[randNum];
}

function getHumanChoice(error) {
    const input = (error ? prompt("Your input was incorrect, try again:") : prompt("Make your choice wisely:")).toLowerCase();

    if (choices.includes(input)) {
        return input;
    }
    return getHumanChoice(true);
}

let humanScore = 0, computerScore = 0;