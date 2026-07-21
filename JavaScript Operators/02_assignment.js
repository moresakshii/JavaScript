const prompt = require('prompt-sync')();

let x=Number(prompt("Enter a number: "));

x+=5;
console.log("After += 5: " + x);

x-=2;
console.log("After -= 2: " + x);

x*=3;
console.log("After *= 3: " + x);

x/=4;
console.log("After /= 4: " + x);

x%=3;
console.log("After %= 3: " + x);