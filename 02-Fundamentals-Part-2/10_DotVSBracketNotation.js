"use strict";

const sandy = {
  firstName: "Sandy",
  lastName: "Lauguico",
  age: 2037 - 1995,
  job: "Data Scientist",
  friends: ["MJ", "Ruzcko", "Galaksy"],
};

// dot notation
console.log(sandy.lastName);

//bracket notation
console.log(sandy["lastName"]);

const nameKey = "Name";
console.log(sandy["first" + nameKey]);
console.log(sandy["last" + nameKey]);

// we cannot always use dot notation even if it is easier to use
// console.log(sandy."last" + nameKey)

const interestedIn = prompt(
  "What do you know about Sandy? Choose between firstName, lastName, age, job, and friends"
);
console.log(interestedIn);

console.log(sandy.interestedIn); // there is no property called interestedIn

console.log(sandy[interestedIn]); // replaces the actual value with a variable

// try to enter location in prompt, undefine is a falsy value
if (sandy[interestedIn]) {
  console.log(sandy[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

sandy.location = "Sandy";
sandy["twitter"] = "@sunthelawgeekoh";
console.log(sandy);

if (sandy[interestedIn]) {
  console.log(sandy[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// Challenge
// Sandy has 3 friends, and her best friend is called MJ"

console.log(
  `${sandy.firstName} has ${sandy.friends.length} friends and her best friend is ${sandy.friends[0]}`
);
