"use strict"

// 1. ----------------------------------------------------------------
// Separating only even number in a nested array

// const arr = [
//   [3, 4, 9, 10],
//   [13, 17, 20, 65],
//   [25, 92, 43, 57],
// ]

// const even = []
// for (let i = 0; i < arr.length; i++) {
//   const nestedArray = []
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] % 2 === 0) {
//       nestedArray.push(arr[i][j])
//     }
//   }
//   even.push(nestedArray)
// }
// console.log(even)
// 1. ----------------------------------------------------------------

// 2. ----------------------------------------------------------------
// Callback function practice

let a = 1
let b = 2

const calculate = function () {
  if (a < b) {
    return true
  } else return false
}

const callback = function (calculate) {
  return calculate
}
callback(calculate)

const checking = function (callback) {
  if (callback() === true) {
    console.log("True")
  } else console.log("False")
}

checking(callback(calculate))
console.log(calculate())
// 2. ----------------------------------------------------------------