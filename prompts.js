//Prompts and Template Literals

const prompt = require("prompt-sync")();//required to import this npm package for node 

var n = Number(prompt("What number would you like to divide by half "));

a = `Half of ${n} is ${n/2}`;

console.log(a)
