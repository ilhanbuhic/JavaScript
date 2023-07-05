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
