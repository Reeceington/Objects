"use strict";
//Example
var rocketBoots = {
    "fuel Type" : "diesel",
    colour : "Obviously red",
    thrust : 1000
};
//Reading object properties and storing thelm in variables 
var colour = rocketBoots.colour; rocketBoots["Fuel Type"];
//Writing to object properties if they exist already
rocketBoots.colour = "Actually blue"; rocketBoots["fuel Type"] = "Petrol";
//Creating new  porperties - if they dont already exsist 
rocketBoots.sensors = ["Toe", "Heel", "Ankle"];
rocketBoots["remainingFuel"] = 100; console.log(rocketBoots); 

// Prints below:
// {
// 	“Fuel Type”: “petrol”,
// 	colour: “Actually, blue”,
// 	thrust: 1000,
// 	sensors: [“Toe”, “Heel”, “Ankle”],
// 	remainingFuel: 100
// }

//Objects literals -Exaercise 001
//Set values to sandwich .01
var toastie = {
"breadType" : "White",
spread : "Butter",
toasted : false,
takeaway : false, //boolean to equal false .03
filling : [], //empty array ,04 
price :[]
}  
toastie.filling.push("Cream Cheese"); //using array.push to add strings to add valuie to empty array 06
console.log(toastie); //Log values to console .02   //logging new items to console .05
delete toastie.toasted;
var toastie002 =  []
for (var counter = 0; counter <11; counter++){
    toastie002.push(toastie)
    toastie.price++
}   console.log(toastie002);

