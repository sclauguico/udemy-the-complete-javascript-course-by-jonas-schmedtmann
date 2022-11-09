"use strict";
// Methods
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Adds elements
//friends.push("Jay"); // . push is a method kind of like a function attached to the array(OOP)
// "Jay" is an argument to the funtion push

console.log(friends);
// .push can also return a value like any other funtions
const newLength = friends.push("Jay");
console.log(newLength);

// add elements in the beginning of the array
const newLength2 = friends.unshift("John");
console.log(friends);
console.log(newLength2);

// Remove the last element
friends.pop(); // we don't need it to have an argument
console.log(friends);

const popped = friends.pop(); // we don't need it to have an argument
console.log(friends);
console.log(popped);

// Remove the first element
friends.shift(); // without argument
console.log(friends);

// tells us what position a certain element is in the array

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // we get -1

// ES6 method
// to determine if the element is in the array or not
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); // follows strict equality

// use case of includes
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
