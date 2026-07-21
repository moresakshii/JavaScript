const prompt=require("prompt-sync")();

let n=Number(prompt("Enter a number:"));
let i=2;

while(i<=n){
    console.log(i);
    i+=2;
}