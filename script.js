const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

    const randNum = Math.floor(Math.random() * 3);

    return choices[randNum];
}

function getHumanChoice() {
    const input = prompt("Make your choice wisely:").toLowerCase();
    
    if (choices.includes(input)) {
        return input;
    }
    console.error("Invalid input");
    return getHumanChoice(true);
}

function playRound(humanChoice, computerChoice) {
    let winner;

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    winner = "tie";
                    break;
                case "paper":
                    winner = "computer";  
                    break;
                case "scissors":
                    winner = "human";
                    break;
            }
            break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        winner = "human";
                        break;
                    case "paper":
                        winner = "tie";  
                        break;
                    case "scissors":
                        winner = "computer";
                        break;
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        winner = "computer";
                        break;
                    case "paper":
                        winner = "human";  
                        break;
                    case "scissors":
                        winner = "tie";
                        break;
                    }
                    break;
    }

    switch (winner) {
        case "human":
            console.log(`You won this round! ${humanChoice} beats ${computerChoice}.`);
            return "human";
        case "tie":
            console.log(`This round is a tie! Both of you chose ${humanChoice}.`);
            return "tie";
        case "computer":
            console.log(`You lost this round! ${computerChoice} beats ${humanChoice}.`);
            return "computer";
    }
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        const roundWinner = playRound(getHumanChoice(false), getComputerChoice());

        switch (roundWinner) {
            case "human":
                humanScore++;
                break;
            case "computer":
                computerScore++;
                break;
            case "tie":
                break;
        }
    }

    if (humanScore > computerScore) {
        console.log(`You won! Your score is: ${humanScore}; The computers score is: ${computerScore}`);
    } else {
        console.log(`You lost! Your score is: ${humanScore} The computers score is: ${computerScore}`);
    }

}


playGame();