const prompt=require("prompt-sync")();
let num1=Number(prompt("Enter a Number:"));

if(num1 % 2==0){
    console.log(num1 + " is an even number");
}else{
    console.log(num1 + " is an odd number");
}