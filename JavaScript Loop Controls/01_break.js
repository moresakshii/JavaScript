const prompt=require("prompt-sync")();

let n=Number(prompt("Enter a number:"));

for(let i=1;i<=10;i++){
    if(i==n){
        break;
    }
    console.log(i);
}