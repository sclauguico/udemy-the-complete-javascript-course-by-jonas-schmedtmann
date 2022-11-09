let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!!!");
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Sandy");
console.log(27);

//convention for variable naming
let firstName = "Matilda";
let first = "Sandy";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// two other characters that are allowed aside from numbers and letters
let sandy_mj = "SM";
let $function = 24;

// not legal to use because 'new' is a reserved keyword in JS
//let new = 'old';

// 'name' is kind of a reserved keyword tho it will still work properly
let name = "Jonas";

// don't start a variable name with an uppercase letter, start with lower case

// all caps letter are reserved for constants that will never changed
let PI = 3.1415;

// variables should be descriptibe. it should be easy to understand what a variable
// is holding just by reading the name of the variable

let myFirstJob = "Teacher";
let myCurrentJob = "Data Scientist";

// bad variable naming
let job1 = "Teacher";
let job2 = "Data Scientist";

console.log(myFirstJob);

//////

true;

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 27);
console.log(typeof "Sandy");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(year);
console.log(typeof year);

console.log(typeof null);

//////
// let: we use the let keyword to declare variables that can change later
// so basically during the execution of our program

//variable mutation
let age = 30;
age = 31;

// const keyword to declare a variable that is not supposed to change at any point
const birthYear = 1995;
birthYear = 1995;
// we cannot declare empty const variable
//this is not legal
const job;

// use 'const' by DEFAULT unless you're sure that 
// the variable will change later on

// var should be completely avoidede as much as possible. 
// it's the old way of 
// declaring variables

var job = "teacher";
job = 'Data Scientist';

// declaring a variable is not really mandatory
// people are arguing about this because it will still work
// it is a terrible idea because this doesn't create the variable
// in the current so-called scope,
// instead JS will create a property on the global object

lastName = "Lauguico";