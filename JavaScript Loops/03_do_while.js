const prompt=require("prompt-sync")();

let n=Number(prompt("Enter a number:"));
let i=1;

do{
    console.log(i);
    i++;
}while(i<=n);