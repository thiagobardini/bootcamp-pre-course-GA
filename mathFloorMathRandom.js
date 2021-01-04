const computer = {
   currentChoice: null
} 

// object
const player = {
   currentChoice: null
}

let gameOptions = ["lapis","Papyrus","Scalpellus"];

// Math.floor() -> transformar o numero em interger
// Math.random() -> é um numero aleatorio 0 .. 0.15.. 0.99 -> nunca vai ser 1
let numIndexComputer = Math.floor(Math.random() * gameOptions.length);
let numIndexPlayer = Math.floor(Math.random() * gameOptions.length);

computer.currentChoice = gameOptions[numIndexComputer];
player.currentChoice = gameOptions[numIndexPlayer];

console.log("The computer chose: " + computer.currentChoice);
console.log("The player chose: " + player.currentChoice);

console.log(gameOptions.length)