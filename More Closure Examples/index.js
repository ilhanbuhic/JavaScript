"use strict"

//Example #1:
console.log("----- Example #1 -----")
let f

const g = function () {
  const a = 23

  f = function () {
    console.log(a * 2)
  }
}

const h = function () {
  const b = 777

  f = function () {
    console.log(b * 2)
  }
}

g()
f()
console.dir(f)

// Re-assigning 'f' function
h()
f()
console.dir(f)

/* In the first 'g' function, the closure is a = 23, then as we reassign the function to a new value,
then that old closure 'disappears' and now the closure is 'b'
Closure can change, as the variable is reassigned
The Closure always makes sure that a function does not lose the connection to the variables that were present at its birthplace
It's always going to remember them. In this case, the function was born inside of 'g' function first, then it was 'reborn' again in 'h'
First, the closure contained the 'a' variable of its first birthplace, and then as it was 'reborn' it remembered the 'b' variable of its birthplace
*/

//Example #2:
// console.log("----- Example #2 -----")
// const boardPassangers = function (n, wait) {
//   const perGroup = n / 3

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passangers`)
//     console.log(`There are 3 groups, each with ${perGroup} passangers`)
//   }, wait * 1000)

//   console.log(`Will start boarding in ${wait} seconds`)
// }

// boardPassangers(180, 3)
/* Immediately when we call this function, variable 'boardPassangers' will be created,
then, setTimeout will be called and it will register the callback function inside of it,
which will be called after 3 seconds

console.log() will be called immediately, it will not wait these three seconds for setTimeout callback to finish

The callback function was executed completely independently from the boardPassangers function
But still, the callback function was able to use all the variables that were in the variable environment in which it was created
The only way in which this callback function can have access to the variables that are defined in the boardPassangers function
that has long finished execution is if it created a closure
*/

// CLOSURE OVER SCOPE CHAIN:
console.log("----- CLOSURE OVER SCOPE CHAIN -----")
const boardPassangers = function (n, wait) {
  const perGroup = n / 3

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers`)
    console.log(`There are 3 groups, each with ${perGroup} passangers`)
  }, wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`)
}

boardPassangers(180, 3)
// In the global scope, we are going to create a variable
perGroup = 1000
/* If the scope chain had priority over the closure, then the callback function would use the variable ('perGroup' / line: 81)
If it wasn't for the closure, the function would use the variable ('perGroup' / line: 81)
The closure has a priority over the scope chain
*/
