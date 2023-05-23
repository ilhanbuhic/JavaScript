"use strict"

const arr = [23, 11, 64]
// Traditional way of taking values out of array
console.log(arr[0])
// Taking value out of array using .at() method
console.log(arr.at(0))

// We want to get the last element of the array
//  Supposing that we don't know the length of the array, we would write:
console.log(arr[arr.length - 1])
// Using .slice() method, we get copy of the array, only witht the last elements
// but this will return an array with the last value in it
console.log(arr.slice(-1))
// If we only need the value, without an array with only one element with it
// we can just take that value out:
console.log(arr.slice(-1)[0])
// We can also write negative indexes using .at() method, just like in .slice() method
console.log(arr.at(-1))

// .at() method also works on strings
console.log('Ilhan'.at(0))
// We can also use negative indexes on it