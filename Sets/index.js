"use strict"

// In the past JavaScript has always had very little data structures, we only had objects and arrays
// In ES6, 2 more data structures were introduced: Sets & Maps

// SET is collection of unique values. They can never have any duplicates and that property makes them useful in certain situations
// To create a new SET, we write 'new Set' and then we need to pass an iterable. The most common iterable is an array
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
])
console.log(ordersSet)
// Here, we have 6 strings. We could've have different data types here
// SETS can hold mixed data types
// The only values that we can see in 'ordersSet ' are: 'Pasta, 'Pizza, 'Risotto', all other duplicates are gone

// Order of elements in the SET is irrelevant
console.log(new Set("Ilhan"))

// We can get the size of a SET
console.log(ordersSet.size)
// This could be useful if the Chief wanted to know how many different meals are going to be cooked

