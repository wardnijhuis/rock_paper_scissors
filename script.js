const buttons = document.querySelectorAll(".choice-btn");
const message_container = document.querySelector("#message-container"); 
const score_container = document.querySelector("#score-container"); 
const resetButton = document.querySelector("#reset-button");
let humanScore = 0;
let computerScore = 0;

score_container.textContent = "0-0";
message_container.textContent = "Make your choice!";
resetButton.style.display = "none"

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    const winner = playRound(humanChoice, computerChoice);
    let message;

    if (winner === "human") {
        message = `You won this round! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else if (winner === "computer") {
        message = `You lost this round! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else {
        message = `This round is a tie! Both of you chose ${humanChoice}.`;
    }

    message_container.textContent = message;

    score_container.textContent = `${humanScore}-${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5) {
        const finalMessage = humanScore >= 5 ? "You won the game!" : "The computer won the game!";

        message_container.textContent = finalMessage;

        buttons.forEach(button => button.disabled = true);
        resetButton.style.display = "block";
    }
  });
});

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    score_container.textContent = "0-0";
    message_container.textContent = "New game! Make your choice.";
    buttons.forEach(button => button.disabled = false);
    resetButton.style.display = "none";
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        rock: { rock: "tie", paper: "computer", scissors: "human" },
        paper: { rock: "human", paper: "tie", scissors: "computer" },
        scissors: { rock: "computer", paper: "human", scissors: "tie" }
    };
    return outcomes[humanChoice][computerChoice];
}