"use strict";

// a variable can hold a value
// a function can hold one or more complete lines of code
// something we can use over and over again
function logger() {
  //function body
  console.log("My name is Sandy");
}

// invoking/running/calling the function
// executing/using
logger();
logger();
logger(14);

// we usually input data to a fucnction
// a function usually returns data back

// we can place parameters inside the functions
// parameters are like variables but only specific to functions
// they get defined once we call the functions
// they represent the input data of the function
function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // console logs are built-in functions

// we should make our code D.R.Y - Dont. repeat. Yourself

const num = Numer("23"); // Number is a built-in function like console.log
