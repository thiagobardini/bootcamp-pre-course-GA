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

// let numIndexComputer = Math.floor(Math.random() * choices.length);
computerChooses(choices)

function computerChooses() {
   let numIndexComputer = Math.floor(Math.random() * choices.length);
   computer.currentChoice = choices[numIndexComputer];
}
console.log("The computer chose: " + computer.currentChoice);

let numIndexPlayer = Math.floor(Math.random() * choices.length);
player.currentChoice = choices[numIndexPlayer];
console.log("The player chose: " + player.currentChoice + `\n`);

function compareChoices() {
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
   } else {
      console.log("Error")
   }
}

// Invoke the function!
compareChoices();