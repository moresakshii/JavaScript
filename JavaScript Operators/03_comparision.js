const prompt=require("prompt-sync")();

let a=Number(prompt("Enter first number:"));
let b=Number(prompt("Enter second number:"));

console.log("Equal:",a==b);
console.log("Not Equal:",a!=b);
console.log("Greater Than:",a>b);
console.log("Less Than:",a<b);
console.log("Greater Than or Equal:",a>=b);
console.log("Less Than or Equal:",a<=b);