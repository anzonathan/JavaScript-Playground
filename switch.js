//Switch Statement with while loop 

const prompt = require("prompt-sync")();


var input = prompt("What card am I holding? ")

switch(input){
    case "Heart":
        console.log("Wrong");
        break;
    case "Diamonds":
        console.log("Wrong");
        break;
    case "Spades":
        console.log("Wrong");
        break;
    case "Flowers":
        console.log("Correct");
        break;
    default:
        console.log("Not a card");
        break;
}
