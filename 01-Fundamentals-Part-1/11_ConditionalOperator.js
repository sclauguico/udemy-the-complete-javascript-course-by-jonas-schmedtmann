const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to dirnk water 💦");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = water;
}

// becuase ternary operator is really an expression,
// we can now use it in a template literal
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
