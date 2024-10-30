const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

    const randNum = Math.floor(Math.random() * 3);

    return choices[randNum];
}

function getHumanChoice(error) {
    let input = error ? prompt("Your input was incorrect, try again:") : prompt("Make your choice wisely:");

    if (input === null) {
        return getHumanChoice(false);
    }
    
    input = input.toLowerCase();

    if (choices.includes(input)) {
        return input;
    }
    return getHumanChoice(true);
}

let humanScore = 0, computerScore = 0;

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
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            return "human";
        case "tie":
            console.log(`It's a tie! Both of you chose ${humanChoice}.`);
            return "tie";
        case "computer":
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            return "computer";
    }
}

