"use strict"

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rissoto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
}

// This way we are destructuring elements one by one
const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

// This way we are destructuring elements all at once
const [x, y, z] = arr
console.log(x, y, z)

// This way we are destructing the first two elements from 'categories' array
let [first, second] = restaurant.categories
console.log(first, second)

// If we want to take the first and the third element from 'categories' array,
// We just need to leave a hole in the destructuring operator, the second element will be skipped
const [firstA, , secondA] = restaurant.categories
console.log(firstA, secondA)

// Let's say that the owner of the restaurant decided to switch places of the main and the secondary category
// We would have to do it this way / ..... OLD WAY .....
// const temp = first
// first = second
// second = temp
// console.log(first, second)

// Using destructing / ..... NEW WAY .....
// [first, second] = [second, first]
console.log(first, second)
