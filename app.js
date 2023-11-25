"use strict";
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
// Initialize an array with some elements
let numbers = [1, 2, 3, 4, 5];
// using splice to remove the element from number arry 
let remE = numbers.splice(1, 2);
console.log(numbers);
console.log(remE);
// Initialize an array with some elements
let numbers2 = [1, 2, 3, 4, 5];
// Using the slice method to create a subarray without modifying the original array
let subAry = numbers2.slice(1, 3); // Creates a new array containing [2, 3]
console.log("Original array:", numbers2); // Output: [1, 2, 3, 4, 5]
console.log("Subarray created with slice:", subAry); // Output: [2, 3]
