function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randNum = Math.floor(Math.random() * 3);

    return choices[randNum];
}

console.log(getComputerChoice())