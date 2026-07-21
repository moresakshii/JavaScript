const prompt=require("prompt-sync")();

let a=Number(prompt("Enter first number:"));
let b=Number(prompt("Enter second number:"));

console.log("bitwise AND",a & b);
console.log("bitwise OR",a | b);
console.log("bitwise XOR",a ^ b);
console.log("bitwise NOT", ~(a<b));
console.log("Left Shift",a << b);
console.log("Right Shift",a >> b);