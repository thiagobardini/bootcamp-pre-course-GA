// EXEMPLO
let temperature = 61;

if (temperature <= 60) {
   console.log("the temperature is below 60 degrees, wear a coat.")
} else { 
   console.log("the temperature is greater 60 degrees, you don't need wear a coat.")
}



// EXEMPLO - Boolean 
let raining = true;

if ( raining == true) {
   console.log("Bring the umbrella.");
} else {
   console.log("You don't need an umbrella")
}


// EXEMPLO USANDO CONDITIONAL dentro de CONDITIONAL dentro de CONDITIONAL
//
let temperature = 59;
let weather = "snowing";

if (temperature < 60) {
   if (weather === "raining") {
       console.log("It's cold and raining. Time for a heavy rain jacket.");
   } else if (weather === "snowing") {
       console.log("It's cold and snowing. Get out the parka.");
   } else {
       console.log("It's cold and clear. Feels like sweater weather today.");
   }
} else {
   if (weather === "raining") {
       console.log("It's warm but it's raining. A light windbreaker will do.");
   } else if (weather === "sunny") {
       console.log("It's warm and sunny. Tank top it is.");
   } else {
       console.log("It's warm and clear. Regular old T-shirt day.");
   }
}


// LOGICAL OPERATORS
// and -> &&    
// or -> || 
// !(3 === 3) -> false
let temperature = 59;
let weather = "snowing";

if (temperature < 60 && weather === "snowing") {
   console.log("Wear boots");
} else { 
   console.log("Free to go!")
}