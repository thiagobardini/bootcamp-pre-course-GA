// PROBLEM 1
// Write a function that accepts one parameter - a name - and logs "Hello I am _____"
// Fill in the blank with the name given to the function

function logName(name) {
  console.log("Hello I am " + name);
}

logName("Thiago");


// PROBLEM 2
// Modify this function to accept two parameters, representing two numbers you want to multiply.
// Then, add a code block that will multiply the two parameters and return the output.
// The code block below the function is meant to check your work for the arguments 2 and 2.
function multiply(num1, num2) {
  //your code here
  return (num1 * num2);
}

const four = multiply(2, 2);
if (four === 4) {
  console.log("The multiply function works!");
} else {
  console.log("Something's wrong with the multiply function!")
}


// PROBLEM 3
// Write a function that accepts an array as a parameter.
// The function should loop through the given array and console.log each element in the array.
// Create your own array to test your work.

function randomNumber(gameNum) {
  for (let i = 0; i < gameNum.length; i++) {
    console.log(gameNum[i]);
  }
}

randomNumber(["num1", "num2", "num3", "num4", "num5"]);

// PROBLEM 4
// Write a function that finds the maximum number in a given array.
// Loop through the array and keep track of the biggest number seen so far.
// Once the loop is over, return the biggest number in the array.
// 1 SOLUTION ////////////////////////////////////////////////////////////////
function randomNumber2(random) {
  let max = random[0];
  for (let i = 1; i < random.length; i++) {
    if(random[i] > max){
      max = random[i] 
    }
    console.log(random[i]);
    console.log("The maximo number is "+ max)
  }
}

const random = [2, 23, 102, 1, 101];

randomNumber2(random);


// Nao consegui fazer com a array do problema 3 igual da solucao



// 2 SOLUTION ////////////////////////////////////////////////////////////////
function randomNumber(gameNum) {
  for (let i = 0; i < gameNum.length; i++) {
    console.log(gameNum[i]);
  }
  max = Math.max(...gameNum)
  return max;
}

const random = [2, 23, 102, 1, 101];
const gameNum = random;

randomNumber(gameNum);
console.log("The biggest number is "+ max)




//////////////////////////////////////////////////////////////////
// GA solution - Problem 3
function printArray(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
printArray(["gold", "silver", "bronze", "participation trophy"])
// GA solution - Problem 4
function findMax(arr){
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}