// object
const computer = {
   currentChoice: null
}

// object
const player = {
   currentChoice: null
}

// lapis = rock | Papyrus = paper | Scalpellus = scissor
let choices = ["lapis", "Papyrus", "Scalpellus"];

let numIndexComputer = Math.floor(Math.random() * choices.length);

let numIndexPlayer = Math.floor(Math.random() * choices.length);

computer.currentChoice = choices[numIndexComputer];
player.currentChoice = choices[numIndexPlayer];

console.log("The computer chose: " + computer.currentChoice);
console.log("The player chose: " + player.currentChoice + `\n`);

if (computer.currentChoice === player.currentChoice) {
   console.log(`This round is a tie! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`);
}

else if (computer.currentChoice === choices[0]) {
   if (player.currentChoice === choices[2]) {
      console.log(`The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`);
   } else {
      console.log(`The player wins! The player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}.`)
   }

} else if (computer.currentChoice === choices[1]) {
   if (player.currentChoice === choices[0]) {
      console.log(`The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`);
   } else {
      console.log(`The player wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`);
   }

} else if (computer.currentChoice === choices[2]) {
   if (player.currentChoice === choices[0]) {
      console.log(`The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`);
   } else {
      console.log(`The player wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`);
   }

} else if (player.currentChoice === choices[0]) {
   if (computer.currentChoice === choices[2]) {
      console.log(`The player wins! The player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}.`)
   } else {
      console.log(`The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`);
   }

} else if (player.currentChoice === choices[1]) {
   if (computer.currentChoice === choices[0]) {
      console.log(`The player wins! The player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}.`);
   } else {
      console.log(`The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`);
   }
} else if (player.currentChoice === choices[2]) {
   if (computer.currentChoice === choices[0]) {
      console.log(`The player wins! The player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}.`);
   } else {
      console.log(`The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`);
   }
} 



// EXAMPLE FROM GA
// const player = {
//    currentChoice: null
//  }
//  const computer = {
//    currentChoice: null
//  }
//  const choices = ["Lapis", "Papyrus", "Scalpellus"];
//  const randomIndex = Math.floor(Math.random() * choices.length);
//  computer.currentChoice = choices[randomIndex];

//  // Here's where the player makes their choice. Try changing the index in the line below to test out the conditional!
//  player.currentChoice = choices[0];

//  // Here, we're accounting out a tie scenario - if the randomIndex that was generated matches the player's choice.
//  if(computer.currentChoice === player.currentChoice){
//    console.log("It's a tie! The computer and player both chose " + computer.currentChoice);

//  // Now, we write a conditional chain for each of the 3 random choices the computer could make. Inside each conditional, we'll nest an "if...else" statement that compares the player's choice to the computer's choice and determines a winner.
//  }else if(computer.currentChoice === choices[0]){
//    if(player.currentChoice === choices[1]){
//      console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//    }else{
//      console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//    }
//  }else if(computer.currentChoice === choices[1]){
//    if(player.currentChoice === choices[2]){
//      console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//    }else{
//      console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//    }
//  }else if(computer.currentChoice === choices[2]){
//    if(player.currentChoice === choices[0]){
//      console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//    }else{
//      console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//    }
//  }

