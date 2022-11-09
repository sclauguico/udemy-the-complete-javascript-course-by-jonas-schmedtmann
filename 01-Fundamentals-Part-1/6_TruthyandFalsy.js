// Falsy values are values that are not excactly false but will become
//false when we try to convert them into a boolean

// In JS there only 5 false values
// 0, "", undefined, null, NaN
//False itself is already false so we don't need to include that in the list
// everything else are called truthy values

// For example, any number that is not 0 or any string that is not empty
// will be converted to true when we attempt to conver them to boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Hello"));
console.log(Boolean({})); //empty object
console.log(Boolean("")); //empty string

// not really used in practical applications
// conversion to Boolean is always implicit instead of explicit
// it is always type coercion
//When does it happen?
//When using logical opeators and logical context: if else statement

// first use case
const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job.");
}

// money is a number, not a result of condition
//meaning it is not boolean
//but JS will type corece it to boolean false
// 0 is a falsy value
// if you change it to 100, 100 is a truthy value

// second use case
/*
let height;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is not defined");
}
*/

let height = 0;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is not defined");
}

// there can be problems using this approach
// we can solve this using logical operators
