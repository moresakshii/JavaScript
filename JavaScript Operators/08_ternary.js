const prompt = require("prompt-sync")();

let age=Number(prompt("Enter your age :"));

let result=age>=18?"Eligible to Vote" :"Not Eligible to Vote";

console.log(result);