"use strict"

// MAP is a data structure that we can use to map values, to keys
// Just like OBJECTS, data is stored in key, values pairs in MAPS
// The big difference between OBJECTS and MAPS is that in MAPS, the keys can have any type
// In OBJECTS, the keys are basically always strings, but in MAPS, we can have any type of keys
// It can even be objects or arrays or other MAPS

// The easiest way to create a MAP is to create an empty map, without passing anything in
const rest = new Map()
// To fill up the map, we can use '.set' method
// We need to pass in 2 arguments, the first one being KEY name and the second VALUE
rest.set("name", "Classico Italiano")
// We can use any data type that we want. We can create locations for this restaurant
// Creating a KEY with a number
rest.set(1, "Firenze, Italy")
rest.set(2, "Lisbon, Portugal")
// Calling the SET method does not only update the MAP that it is called on, but it also returns the MAP
console.log(rest.set(2, "Lisbon, Portugal"))

// The fact that the '.set' method returns the updated MAP allows us to chain the '.set' method
console.log("\n---- CHAINING WITH .SET METHOD ----")
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed")
console.log(rest)
// Calling the .set method returns the updated MAP, so all of this is an updated MAP and we can call .set again on that MAP

// In order to read data from the MAP, we use the '.get' method. We only need to pass in the name of the KEY (return 'undefined')
console.log("\n---- READING DATA / .get ----")
console.log(rest.get("name"))
console.log(rest.get(true))
// The data type of the key matters
// This wouldn't work:
console.log(rest.get("true"))
console.log(rest.get("1"))

// Making a program
console.log(`\n---- PROGRAM ----`)
const time = 21
console.log(rest.get(time > rest.get("open") && time < rest.get("close")))
// We are asking if the current time is between 23 and 11. Which is true/false value
// The result of this operation will be either true of false

// We can check if the MAP contains a certain KEY
console.log(`\n`)
console.log(rest.has("categories"))
// We can also delete elements from the MAP, which is based on KEY
// We want to close the second location of the restaurant
rest.delete(2)
console.log(rest)

// Maps also have the size property
console.log(rest.size)

// There is some overlap in the way that we work with MAPS and SETS, because they were both introduced in ES6

// We can use arrays or objects as MAP keys
// Array as a MAP key:
rest.set([1, 2], "Test")
console.log(rest)

// We can also get the data based on that array
console.log(`\n- RETRIEVING DATA BASED ON ARRAY-`)
rest.get([1, 2]) // This will not retrieve data
console.log(rest.get([1, 2]))
// This is because these 2 arrays are not the same object:
// 1. rest.set([1, 2], 'Test')
// 2. rest.get([1, 2])
// Even though we wrote the in the same way and they have the same elements, they are not the same object in the Heep
// In order to make it works, we have to do this
const arr = [1, 2]
rest.set(arr, "Test")
console.log(rest.get(arr))

// Object as a MAP key:
// This can be very useful with DOM elements, that are just special type of object
console.log(`\n- RETRIEVING DATA BASED ON OBJECT-`)
rest.set(document.querySelector("h1"), "Heading")
console.log(rest)

// We can also clear/remove all the elements from the MAP
// rest.clear()
// console.log(rest)
