"use strict"

// We use spread operator to unpack all array elements at once
const arr = [7, 8, 9]
// To create a new array based on this array, but with some new elements at the begining
// We could do it like this, but this is a bad way
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

// Using spread operator
const newArr = [1, 2, ...arr]
console.log(newArr)
// Spread operator takes all the values out of 'arr' array and then write them individually as if we wrote 7,8,9 manually
// Whenever we needs the elements of an array individually, we can use spread operator
// That is useful when we write an array and when we need to pass multiple elements into a function
console.log(...newArr)

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
}

const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
]
// Old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])

// With spread operator
restaurant.orderPasta(...ingredients)

// Adding a new item in the menu to already existing one
const newMenu = [...restaurant.mainMenu, "Gnocci"]
console.log(newMenu)

// Copying an array
const mainMenyCopy = [...restaurant.mainMenu]

// Joining 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

// Iterables are: arrays, strings, maps, sets. NOT objects
const str = "Ilhan"
const letters = [...str]
console.log(letters)
console.log(...str)

// Spread operator on object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Ilhan Buhic" }
console.log(newRestaurant)
