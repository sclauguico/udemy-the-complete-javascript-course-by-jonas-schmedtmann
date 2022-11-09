const friend1 = "Michael";
const firend2 = "Steven";
const friend3 = "Peter";

// not effient to do if you have many values to store
// The two most impt. data structures:
// 1. Array
// 2. Objects

const friends = ["Michael", "Steven", "Peter"]; // the literal syntax
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // .length is a property (OOP)
console.log(friends[friends.length - 1]); // friends.length-1 is an expression

// array mutation
friends[2] = "Jay";
console.log(friends);
console.log(friends[2]);

// you might be wondering,  variables declared with const cannot be changed?
// only primitive values are imuutable
// Array is not a primitive value, that is why we can mutate it
// What we cannot do is to entirely replaye the array

// friends = ["Bob", "Alice"]; // error

// Array can hold different data types
const firstName = "Sandy";
const sandy = [firstName, "Lauguico", 2037 - 1995, "Data Scientist", friends];
console.log(sandy); // expand the triangle to see the entire array
console.log(sandy.length);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

// we cannot do this
calcAge(years); // not really illegal, but it is not gonna work
// it is like subtracting a number with an array
console.log(calcAge(years)); // NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
