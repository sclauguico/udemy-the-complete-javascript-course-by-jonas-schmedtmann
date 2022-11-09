/*
const age = 5;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
}

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
*/

/*
const birthYear = 1995;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
*/

// what is inside the code block cannot be accessed outside the code block
//console.log(century);

let century;
const birthYear = 1995;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
