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

console.log(getComputerChoice())

console.log(getHumanChoice(false))