"use strict"

// Coding Challenge

// Use the elements from the array and make the first letter to uppercase

const fullName = ["ilhan", "buhic"]

// Solution #1:
fullName.forEach(function (curr) {
  console.log(
    curr[0].replace(curr[0], curr[0].toUpperCase()) + curr.slice(1, curr.length)
  )
})

// Solution #2:
// const changeName = function (arr) {
//   return arr.map((name) => name[0].toUpperCase() + name.slice(1))
// }
// console.log(changeName(fullName))
