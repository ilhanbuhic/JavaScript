"use strict"

/* Methods are just functions that we can call on an object. They are functions attached to objects
If we have array methods, that means that arrays themselves are also objects
These array methods are simply functions that are attached to all arrays that we create in JS */

console.log("----- SLICE -----")
// .slice() method:
// .slice() method, we can extract part of any array, but without the changing of original array

let arr = ["a", "b", "c", "d", "e"]

// Just like in strings, we have the begin parameter. This is the index at which we will start extracting

console.log(arr.slice(2)) // This .slice() method will return a new array
// This does not mutate the original array, instead it returns a new array,
// copy of the array, but only with extracted parts

// We can also define the end parameter
console.log(arr.slice(2, 4)) // The length of the output array will be the end parameter minus the beginning one

// Negative begin parameter:
console.log("----- NEGATIVE BEGIN PARAMETER -----")
console.log(arr.slice(-2)) //Negative begin parameter, it will start to copy from the end of the array. This will take 2 last elements

// Negative end parameter:
console.log("----- NEGATIVE END PARAMETER -----")
console.log(arr.slice(1, -1))

// We can use the .slice() method to create a shallow copy of any array
console.log(arr.slice())
// To do this, we just call .slice() method without any arguments

console.log("---- SPREAD VS SLICE")
// We can use both spread operator and the .slice() method to create a shallow copy
console.log([...arr])
console.log(arr.slice())
// This is a matter of personal preference
// The only time we need to use the .slice() method is when we want to chain multiple methods together, calling one after the other
