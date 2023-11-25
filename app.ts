// I have initialize an array here
let names = ["ali", "basit", "taimur"];

// Here I will be adding elements to arry with push 
names.push("immad", "safwan");
console.log(names); 

//  here I can remove the element with the help of pop
let removedElement = names.pop();
console.log(names); 
console.log(removedElement); 

// I can remove the first element with the help of shift 
let firstadd = names.shift();
console.log(names); 
console.log(firstadd); 

//I will be using unshift to add the element to the start of array 

names.unshift("babar", "rizwan");
console.log(names); 

//array 1
let numbers = [1, 2, 3, 4, 5];

// using splice to remove the element from number arry 
let remE = numbers.splice(1, 2); 
console.log(numbers); 
console.log(remE); 


//array 2

let numbers2 = [1, 2, 3, 4, 5];

// Here I use slice to cut the arry from number index 1 to index 2
let subAry = numbers2.slice(1, 3); 
console.log(numbers2);
console.log(subAry);