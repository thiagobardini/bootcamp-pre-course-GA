// Invoking a Function
function sayHello() {
   console.log("Hello!");
}

sayHello();

//////////////////////////////////////////////////////////////////
//Knowledge Check
function chorus() {
   console.log("Nasci no meio de Milhares de pinheiros, mas eu saquei que sou uma goiabeira");
}

chorus();

//////////////////////////////////////////////////////////////////
// From Parameters to Arguments
function calculateTotal(price, salesTaxRate) {
   const totalAmount = price + (price * salesTaxRate);
   console.log("The total is $" + totalAmount);
}

calculateTotal(4.50, .10);

//////////////////////////////////////////////////////////////////
// Using the ouput -> RETURN
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
// Now, we can use the result of the function. We could create a new variable called total and use it to store the result of calculateTotal() so that we can refer to it elsewhere.
const total = calculateTotal(4.5, .10);

//////////////////////////////////////////////////////////////////
// Global Scope

const brother = "Phillip";

function sayHello() {
   console.log("Hello " + brother);
}

sayHello();   // brother can be accesed here

console.log(brother);   // and brother can be accessed here

//////////////////////////////////////////////////////////////////
// Local Scope
function sayHello() {
   const brother = "Phillip";
   console.log("Hello " + brother);
};

sayHello();   // brother would be logged here...

console.log(brother);   // but it can’t be accessed on its own here.

//////////////////////////////////////////////////////////////////
// The Arrow Function
// Older way:
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);

// Newer way:
const calculateTotal = (price, salesTaxRate) => {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);
/*
- Only the first line of the function changes.
- Instead of using function to define the function, we use const.
- Then, we separate the parameters using a =, followed by the “fat arrow” symbol, =>.
- There are some advanced differences between regular functions and arrow functions, but we don't need to get into those here.
*/

//////////////////////////////////////////////////////////////////
// Rewrite the following function using the arrow function syntax:
/*
function embraceChange() {
  console.log("Now I'm an arrow function.");
}
embraceChange();
*/

const embraceChange = () => {
   console.log("Now I'm an arrow function.");
}
embraceChange();