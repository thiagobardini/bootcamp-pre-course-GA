// PROBLEM 1
// Add "Chemical X" to the end of the existing array of ingredients
// Don't redefine the entire array!
const ingredients = ["sugar", "spice", "everything nice"];
ingredients.push("Chemical X");


// PROBLEM 2
// Remove each element, one by one, from the characters array
// As you remove them, console.log a message saying "_____ is gone, and ____ characters are left"
// Fill in the first blank with the character name, the second with how many elements are left in the array
// Use variable values in your message; don't hard-code the names of the characters into your messages!
const characters = ["Margery", "Rob", "Ned"]
let victim = characters.pop();
console.log(victim+" is gone, and "+characters.length+" characters are left");

victim = characters.pop();
console.log(victim+" is gone, and "+characters.length+" characters are left");

victim = characters.pop();
console.log(victim+" is gone, and "+characters.length+" characters are left");

// for (let i = 0; i < len; i++) {
//   characters.pop();
//   console.log(characters[2]+" is gone, and "+characters.length+" characters are left");
//     break;
// } ??????


// PROBLEM 3
// Create a new object representing your favorite musical artist
// Include a property of each of the following types: String, Boolean, Number
// Also include a property that's an array
const favoriteMusicalArtist = {
  artistName: "Bob",
  songWriter: true,
  numberOfAlbuns: 3,
  albumName: ["hello", "love", "universo"]
};

console.log(favoriteMusicalArtist);

// PROBLEM 4
// Change the properties of this object, resetting health to 100 and points to 0
const player = {
  health: 50,
  points: 750
}

player.health = 100;
player.points = 0;

console.log(player);

// PROBLEM 5
// Using array index and object property syntax, access and console.log the second team's name
const teams = [ {name: "Chicago Cubs"}, {name: "Chicago White Sox"}, {name: "Boston Red Sox"} ];

console.log(teams[1].name);

