"use strict";

// Arrow function

// easire to write functions
// no curly brackets
// no return functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

//
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "Sandy"));

// What type of function should I use?
// Arrow functions don't get the so-called 'this' keyword (OOP)
// Mainly we can uuse function declarations and expressions except for one-liner
// functions we can use arrow functions
