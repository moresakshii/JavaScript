const prompt=require("prompt-sync")();

let a=Number(prompt("Enter a number:"));

if(a%2==0){
    console.log("Even number");
}else{
    console.log("Odd Number");
}