const prompt =require("prompt-sync")();

let x=Number(prompt("Enter a number:"));

console.log("Original Value:",x);

console.log("Post-decrement")
x--;
console.log("After Decrement:",x);

console.log("Pre-decrement")
--x;
console.log("After Decrement:",x);