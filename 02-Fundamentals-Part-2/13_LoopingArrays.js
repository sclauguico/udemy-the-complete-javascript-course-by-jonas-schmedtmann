"use strict";
const sandy = [
  "Sandy",
  "Lauguico",
  2037 - 1995,
  "Data Scientist",
  ["MJ", "Ruzcko", "Galaksy"],
  true,
];

const types = [];

console.log(sandy[3]);
console.log(sandy[5]); //does not exist

for (let i = 0; i < 5; i++) {
  // condition is hard-coded
  console.log(sandy[i]);
}

for (let i = 0; i < sandy.length; i++) {
  console.log(sandy[i]);
}

for (let i = 0; i < sandy.length; i++) {
  // Reading from sandy array
  console.log(sandy[i], typeof sandy[i]);

  // filling types array
  // types[i] = typeof sandy[i];
  types.push(typeof sandy[i]);
}

console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("---ONLY STRINGS---");
for (let i = 0; i < sandy.length; i++) {
  if (typeof sandy[i] !== "string") continue;
  console.log(sandy[i], typeof sandy[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < sandy.length; i++) {
  if (typeof sandy[i] === "number") break;
  console.log(sandy[i], typeof sandy[i]);
}
