function rockPaperScissors(player1, player2) {

  if (player1 == player2) {
    return "draw";
     // Determine the winner based on the rules of the game

  }
  /*/ Determine the winner based on the rules of the game
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "player1";
  } else {
    return "player2";
  }
}*/ 
  const winningRules = {
    rock: ["scissors", "lizard"], // Rock crushes scissors and crushes lizard
    paper: ["rock", "spock"], // Paper covers rock and disproves Spock
    scissors: ["paper", "lizard"], // Scissors cut paper and decapitate lizard
    lizard: ["spock", "paper"], // Lizard poisons Spock and eats paper
    spock: ["scissors", "rock"], // Spock smashes scissors and vaporizes rock
  };

  // Check if player1's choice beats player2's choice
  if (winningRules[player1].includes(player2)) {
    return "player1";
  } else {
    return "player2";
  }
}










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}