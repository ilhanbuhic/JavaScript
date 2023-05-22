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

console.log("----- SPLICE -----")
// .splice() method:
// .splice() works in almost the same way as .slice()
// The fundamental difference is that it does change the original array, it mutates that array
console.log(arr.splice(2)) // output: [c, d, e]
console.log(arr) // output: [a, b]
// The extracted elements are gone from the original array, .splice() deleted them
// Splice does mutate the original array
// It takes part of the array, returns it, then the original array itself loses this part that was extracted
// In practice, most of the time, the value that the .splice() method returns doesn't even interest us
// We are usually interested in is to just delete one or more elements from an array using .splice()
// Common use case is to remove the last elements of an array
console.log(arr.splice(-1))

console.log(arr.splice(1, 2))
// The first parameter works the same as in the .slice() method, but the second one is the number of elements that we want to delete

console.log("----- REVERSE -----")
// This method reverses the array
arr = ["a", "b", "c", "d", "e"]
const arr2 = ["j", "i", "h", "g", "f"]
console.log(arr2.reverse())
// Reverse method doesn't mutate the original array

console.log("----- CONCAT -----")
// This method is used to concatenate two arrays
const letters = arr.concat(arr2)
console.log(letters)
// The first array will be the one on which the method is called and the second one is the one that we pass into the .concat() method
// We can also concat arrays using the spread operator

console.log("---- JOIN ----")
console.log(letters.join("-"))
// The result is a striing with the separator that we specified
