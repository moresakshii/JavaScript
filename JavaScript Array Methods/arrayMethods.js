//length
let fruits=["Apple","Banana","Mango","Grapes"];
console.log(fruits.length);

//push()=====>adds element at end
let days=["sunday","Monday","Tuesday","Wednesday"];
days.push("Thursday");
console.log(days);

//pop()=====>removes last element
let names=["sakshi","pranjali","shravani","priti"];
fruits.pop();
console.log(names);

//unshift()=====>adds at beginning
let birds=["sparrow","crow","parrot",];
birds.unshift("peacock");
console.log(birds);

//shift()=====>removes first element
let animals=["rabbit","dog","cat",];
animals.shift();
console.log(animals);

//includes()=====>checks if an element exits in the array 
let months=["january","february","march","april"];
console.log(months.includes("march"));

//indexOf()=====>find index of an element
let seasons=["spring","summer","autumn","winter"];
console.log(seasons.indexOf("summer"));

//join()=====>converts the array into a string
let subjects=["Math","English","Science","History"];
console.log(subjects.join("-"));

//slice()=====>returns a copy
let capitals=["Mumbai","Chandigarh","Chennai","Gandhinagar"];
console.log(capitals.slice(1));

//splice()=====>adds or removes elements in the origional array
let colors=["red","blue","green"]
colors.splice(1,1,"pink")
console.log(colors);

//reverse()=====>reverses the order of the array
let sports=["football","cricket","hockey","tennis"];
console.log(sports.reverse());

//sort()=====>sorts the array elements
let nums=[5,7,3,8,2,9];
nums.sort((a,b)=>a-b);
console.log(nums);

//concat()=====>combines two or more array and returns a new array
let a=[1,2];
let b=[3,4];

console.log(a.concat(b));

//forEach()=====>executes function for each element
let flowers=["rose","tulip","lotus","sunflower",];

flowers.forEach((flower,index)=>{
    console.log(index,flower);
});

//map()=====>creates a new array
let num=[1,2,3,4];
let result=num.map(num=>num*2);
console.log(result);

//filter()=====>return matching elements
let num1=[10,20,30,40];
let res=num1.filter(num=>num>20);
console.log(res);

//find()=====>returns the first matching elements
let numbers=[10,20,30,40];
console.log(numbers.find(num=>num>15));