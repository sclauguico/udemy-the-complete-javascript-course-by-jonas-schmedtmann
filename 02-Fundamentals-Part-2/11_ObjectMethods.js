"use strict";

// const sandy = {
//   firstName: "Sandy",
//   lastName: "Lauguico",
//   birthYear: 1995,
//   job: "Data Scientist",
//   friends: ["MJ", "Ruzcko", "Galaksy"],
//   hasDriversLicense: true,

//   // functions are just another typ of value
//   // functions can be a value in a key-value pair
//   // any function attached to an object is called a method
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   }
// };

// similar to this
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// },

// access the property
// console.log(sandy.calcAge(1995));
// console.log(sandy["calcAge"](1995));

// const sandy = {
//   firstName: "Sandy",
//   lastName: "Lauguico",
//   birthYear: 1995,
//   job: "Data Scientist",
//   friends: ["MJ", "Ruzcko", "Galaksy"],
//   hasDriversLicense: true,

//   // we don't have to pass the birthYear parameter in the function
//   calcAge: function () {
//     //console.log(this);
//     // reading the parameter directly from the object
//     // this, refers to "this" object
//     return 2037 - this.birthYear; // we can use the actual name of the object
//     // but the this keyword is more flexible when
//     // th object's name get changed
//   },
// };

// // sandy is the object calling the method
// console.log(sandy.calcAge());
// console.log(sandy.calcAge());
// console.log(sandy.calcAge());

// const sandy = {
//   firstName: "Sandy",
//   lastName: "Lauguico",
//   birthYear: 1995,
//   job: "Data Scientist",
//   friends: ["MJ", "Ruzcko", "Galaksy"],
//   hasDriversLicense: true,

//   // functions are just another typ of value
//   // functions can be a value in a key-value pair
//   // any function attached to an object is called a method
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(sandy.age);
// console.log(sandy.age);
// console.log(sandy.age);

// Challenge

const sandy = {
  firstName: "Sandy",
  lastName: "Lauguico",
  birthYear: 1995,
  job: "Data Scientist",
  friends: ["MJ", "Ruzcko", "Galaksy"],
  hasDriversLicense: false,

  // functions are just another typ of value
  // functions can be a value in a key-value pair
  // any function attached to an object is called a method
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      sandy.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(sandy.getSummary());
