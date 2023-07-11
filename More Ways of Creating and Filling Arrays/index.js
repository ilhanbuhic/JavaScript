"use strict"

// Up until now we have been creating arrays in this way:
console.log([1, 2, 3, 4, 5, 6])
console.log(new Array(1, 2, 3, 4, 5, 6, 7))

// We can also generate arrays programmatically, without having to define all the items manually
// There are couple of ways to achieve this
// The easiest way to do this is to the Array() constructor function
const x = new Array(7)
console.log(x)
// This will create a new array with seven empty elements
// We also cannot use this 'x' array for anything
// For example, we cannot call the .map() method on it to fill it up
console.log(x.map(() => 5)) // This will do nothing
// This is not so useful, except for one thing

// There is one method that we can call on this empty array and that is the .fill() method
// All we need to do is to pass in a value and it will fill up the entire array with this specific value
// This will mutate the underlying array
const y = new Array(7)
y.fill(1)
console.log(y)

// Besides this value that we want to fill the array with, we can also specify where we want it to start to fill
const z = new Array(7)
z.fill(1, 3) // We want it to start filling only from the index 3
console.log(z)
// It will fill it up until the end, unless we specify an end parameter just like in .slice() method
x.fill(1, 3, 5)
console.log(x)

// We can also use the .fill() method on other arrays, it doesn't have to be an empty array
const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr)
arr.fill(23, 4, 6)
console.log(arr)
// It will mutate the original one

/* Array,from()
 To create an array that looks like this: [1, 2, 3, 4, 5], we can use the Array.from() function
 We are using .from() method on the Array() constructor
 Array is a function and then on this function object, we call the .from() method
 Into this function, we can first pass in:
 1. An object with the length property
 2. Second argument is a mapping function. It is exactly like the callback function that we pass into the .map() method
 In this case, we don't even need any arguments, but we still have to write a function
 We will write an arrow function, which will return 1 in each iteration. No arguments, no current elements, no current index, nothing
 All we want to return is 1 in each of the array positions
 */
const ArrayFrom = Array.from({ length: 7 }, () => 1)
console.log(ArrayFrom)

// Adding 1 to the index will give us values from 1 to 7
const array = Array.from({ length: 7 }, (curr, i) => i + 1)
console.log(array)

// We could create an array with 100 random dice rolls
const arr100 = Array.from({ length: 100 }, (_, i) => i + 1)
console.log(arr100)

// Array.from() function was initially introduced into JavaScript in order to create arrays from array like structures
// Strings, Maps, Sets are all iterables in JavaScript and they can be converted to real arrays using Array.from()
// This is also the reason for the name of the function, because we can create arrays FROM other things
// Another example of an array-like structure is the result of using QuerySelectorAll(),
// which returns a NodeList, which is something like an array, which contains all the selected elements
// It's not a real array and it doesn't have methods like .map(), .reduce() and it doesn't have most of the array methods
// If we wanted to use a real array method like that on a NodeList
// we would first need to convert the NodeList to an array and we can use Array.from() for that

// Let's say that we do not have some array, but we have some values in the UI,
// but we want to calculate the sum of these values, from the UI, without having an array of those values that are in the UI
// We would first need to somehow get those values from the UI and then do the calculation based on that

const valuesUI = Array.from(document.querySelectorAll(".someValue"))
// Now we could use this array and the array methods after we converted the NodeList into an array
valuesUI.map((el) => el.textContent.replace("€", ""))

// We can also use the second argument of the Array.from() method, which is the mapping callback
// We can do this all at once, using the callback as the argument, instead of doing it separately like in (line: 76/78)
const valueUI1 = Array.from(
  document
    .querySelectorAll("someValue")
    .map((el) => el.textContent.replace("€", ""))
)

// There is also another way to convert .querySelectorAll() to an array,
// by spreading the result of this .querySelectorAll() into a new array
const valueUI2 = [...document.querySelectorAll("someValue")]
// But then, we would have to do the mapping separately
