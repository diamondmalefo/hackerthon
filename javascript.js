function getComputerChoice() {
  const random = Math.random();

  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:").toLowerCase();
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const random = Math.random();

    if (random < 0.33) return "rock";
    else if (random < 0.66) return "paper";
    else return "scissors";
  }

  function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:").toLowerCase();
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`Draw! You both chose ${humanChoice}`);
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  // 🔁 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  // 🏁 Final result
  console.log("Final Score:");
  console.log(`You: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🏆 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}

playGame();