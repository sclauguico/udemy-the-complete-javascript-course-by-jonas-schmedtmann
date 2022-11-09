// triple equal is the strict equality operator
// it is strict becuase it will not perform type coercion
// it will return true if both values are exactly the same

const age = 18;
if (age === 18) console.log("You just became an adult");

// looese equality operator
// does type corecion
console.log(18 == "18");

console.log(18 === "18"); // always use this for comparing and clean code

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
  // '23' == 23
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

// we need to wrap the promt to Number
//const favorite = Number(prompt("What's your favorite number?"));

if (favorite !== 23) {
  console.log("Why not 23?");
}
