"use strict"

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenza, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${adress} at ${time}`
    )
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}. ${ing3}`)
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

// Rest pattern looks exactly like the spread operator. It has the same sintax with 3 dots, but does the opposite of spread operator
// We used Spread Operator to expand an array into individual elements. Rest patterns is used to collect multiple elements compress them into array
// Spread operator is used to unpack elements from the array, while rest pattern is used to pack the elements into an array

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]
console.log(arr)

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)
