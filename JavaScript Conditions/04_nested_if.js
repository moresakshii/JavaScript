const prompt=require("prompt-sync")();

let age=Number(prompt("Enter your age:"));
let hasLicense=prompt("Enter true or false:");

if(age>=18){
    if(hasLicense=="true"){
    console.log("You can drive");
    }else{
        console.log("Get a license first");
    }
}else{
    console.log("you are to young to drive");
}