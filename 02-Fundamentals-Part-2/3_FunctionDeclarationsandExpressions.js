"use strict";

// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// developers use the word argument and parameters interchangeably
// argument is the actual value we place in the placeholder that is the parameter
const age1 = calcAge1(1995);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear; // the after the equal sign is an expression
  // expression produces values, which we assigned to calAge2 in this case
  // functions are just values like string values, boolean values, it is not a type
  // that is why we can store it in variables
};

const age2 = calcAge2(1991);

console.log(age1, age2);

// main difference of function declaration and expression is that
// we can actually call function declarations before they are defined in the code
// reverse of first example

// Function declaration
const age1 = calcAge1(1995);
console.log(age1);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// we cannot invoke a function expression without declaring it first because of hoisting

// Function expression
const age2 = calcAge2(1991);

console.log(age1, age2);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Jonas' preference is Function expression because it would then be requried to degine all
// functions first at the top of the code before calling them. This makes the code nicer
// and a little bit more structured. Also he likes stroing functions in variables
