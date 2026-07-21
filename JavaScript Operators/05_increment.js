const prompt =require("prompt-sync")();

let x=Number(prompt("Enter a number:"));

console.log("Original Value:",x);

console.log("Post-increment")
x++;
console.log("After Increment:",x);

console.log("Pre-increment")
++x;
console.log("After Increment:",x);