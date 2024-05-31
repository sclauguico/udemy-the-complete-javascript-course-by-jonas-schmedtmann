'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  // openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// DESTRUCTURING ARRAYS

const arr = [2, 3, 4];
// without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructuring
// left side is destructuring the right side
// of the equation, arr (array)
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

// to skip the second element
const [first_1, , second_2] = restaurant.categories;
console.log(first_1, second_2);

// switching the main and secondary category
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// switching with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);



// DESTRUCTURING OBJECTS


// THE SPREAD OPERATOR

const arr2 = [7, 8, 9];
const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr2];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


const mainMenuCopy = [...restaurant.mainMenu]

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);


// Iterables: arrayts, strings, maps, sets. NOT objects

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log('j', 'o');
// console.log(`${...str} Schmedtmann`);

const ingredients = [
  // prompt('Let\'s make pasta! Ingredient 1?'), 
  // prompt("Ingredient 2?"), 
  // prompt("Let's make pasta! Ingredient 1?")
]

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1],
  ingredients[2]);

restaurant.orderPasta(...ingredients);  

// Objects
const newRestaurant = {foundedIn: 1998, ...
  restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);