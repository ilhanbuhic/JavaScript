"use strict"

// Square root
console.log(Math.sqrt(25))
// Finding a square root using exponentiation operator
console.log(25 ** (1/2))
// This would also work for a cubic root
console.log(8 ** (1/3))

// Finding maximum number
console.log(Math.max(2, 13, 56, 49, 31))
// This .max() function does type coercion
console.log(Math.max(2, 13, '56', 49, 31))
// It doesn't do parsing
console.log(Math.max(2, 13, '56px', 49, 31)) // Result: NaN

// Finding minimum number
console.log(Math.min(2, 13, 56, 49, 31))

// There are also constants on the Math object/namespace
// If we wanted to calculate the radius of a circle of 10px
console.log(Math.PI * Number.parseFloat('10px') ** 2)

// Making a function for giving random number between min & max
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min
console.log(randomInt(0, 6))

// Rounding integers
console.log(Math.trunc(23.6)) // .trunc() method will only remove decimal part
console.log(Math.round(23.6)) // .round() will round to the nearest integer

console.log(Math.ceil(23.3)) // .ceil() will round up to a higher integer

console.log(Math.floor(23.9)) // .floor() will round down an integer
// .floor() method also does type coercion itself

// .floor() and .trunc() method works the same when we are working with positive numbers,
// but they work differently for negative numbers
console.log(Math.trunc(-23.3))
console.log(Math.floor(-23.3))
// It's best to use the .floor() method, because it works the same whether the numbers are positive or negative

// Rounding decimals
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3))
console.log(+(2.345).toFixed(2))
// .toFixed() method will always return a string, not a number
// .toFixed() works different than the string methods. (line: 43) is actually number
// JavaScript can do something called 'boxing'
// Boxing is to transform primitives to a number object, then call the method on that object and once the operation is finished
// It will convert it back to a primitive