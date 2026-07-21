const prompt = require('prompt-sync')();

let a=Number(prompt("Enter first number:"));
let b=Number(prompt("Enter second number:"));

console.log("AND:",a>10 && b<20);
console.log("OR:",a>10 || b<20);
console.log("NOT:",!(a>b));