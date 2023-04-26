"use strict"

const openingHours = {
  Thursday: {
    open: 12,
    close: 22,
  },
  Friday: {
    open: 11,
    close: 23,
  },
  Saturday: {
    open: 0, // Open 24 hours
    close: 24,
  },
}
// There is another way of to add elements to the MAP, without using the ".set" method
// '.set' method can be troublesome, when there are a lot of values to set

// We are going to make a new MAP and then pass in an array
// This array itself will contain multiple arrays and in each of these arrays, the first position is going to be a KEY and second the VALUE

// Creating a quiz:
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again 🤣"],
])
console.log(question)

// Converting OBJECTS to MAPS:
console.log(`\n--CONVERTING OBJECTS TO MAPS--`)
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)
// console.log(Object.entries(openingHours))

// Converting MAP to ARRAY:
console.log(`\n--MAP TO ARRAY--`)
console.log(...question)

// Iteration is possible on MAPS, because MAPS are iterables
console.log(`\n---- LOOPING THROUGH MAPS----`)
// for (let i = 0; i < Object.entries(openingHours).length; i++) {
//     console.log(Object.entries(openingHours)[[i]])
// }
