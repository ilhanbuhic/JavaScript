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

// We can have a function return an array and then we can restruct the result to different variables
// This allows us to return multiple variables from a function
// Write a function to order food
console.log(restaurant.order(2, 0))

// Receiving 2 return values from a function
const [starter, main] = restaurant.order(2, 0)
console.log(starter, main)

// We are trying to return 2 from the first array and an entire second array
// Nested destructuring
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested
// console.log(i, j)

// We are trying to return individually 2, 5, 6
const [i, , [j, g]] = nested
console.log(i, j, g)

// We can also set default values for variables when we are extracting them
// That's very useful when we don't know the lengh of the array
// If we have an array that is shorter than we think, we might try to unpack the array in the positions that don't even exist
// Default values:
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r)
// We get undefined, because we only have elements at position 0 and 1, so we can set default values
