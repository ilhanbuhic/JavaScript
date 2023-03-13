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
