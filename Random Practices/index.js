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

// let a = 1
// let b = 2

// const calculate = function () {
//   if (a < b) {
//     return true
//   } else return false
// }

// const callback = function (calculate) {
//   return calculate
// }
// callback(calculate)

// const checking = function (callback) {
//   if (callback() === true) {
//     console.log("True")
//   } else console.log("False")
// }

// checking(callback(calculate))
// console.log(calculate())
// 2. ----------------------------------------------------------------

// 3. ----------------------------------------------------------------
// Callback function practice

// let firstName = "Ilhan"
// let lastName = "Buhic"

// const displayFirstLastName = function (firstName, lastName) {
//   console.log(firstName, lastName)
// }

// const errorFunction = () => console.log("Error")

// const displayTest = function (firstName, lastName, callback1, callback2) {
//   if (firstName === "Ilhan" && lastName === "Buhic")
//     callback1(firstName, lastName)
//   else callback2()
// }
// displayTest(firstName, lastName, displayFirstLastName, errorFunction)
// 3. ----------------------------------------------------------------

// 4. ----------------------------------------------------------------
// If element is even, add it up with 2, if not subtract with 1
// Mutate the original array
// let arr = [1, 2, 3, 4, 5, 6]

// arr.forEach((el, index) => {
//   if (arr[index] % 2 === 0) arr[index] = el + 2
//   else {
//     arr[index] = el - 1
//   }
// })
// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) arr[i] + 2
//   else arr[i] - 1
// }
// console.log(arr)
// 4. ----------------------------------------------------------------

// 5. ----------------------------------------------------------------
// Seperate the words that have the letter 'a' as the second letter of the word
// let words = [
//   "Banana",
//   "Animal",
//   "Amazing",
//   "Attack",
//   "Annual",
//   "Against",
//   "Car",
//   'Map'
// ]
// let newWords = []

// for (let i = 0; i < words.length; i++) {
//   if (words[i][1] === "a") {
//     newWords.push(words[i])
//   }
// }
// console.log(newWords)
// 5. ----------------------------------------------------------------

// 6. ----------------------------------------------------------------
// Make the first and last name starting with the uppercase letter
// const fullName = ["ilhan", "buhic"]

// Solution #1:
// fullName.forEach(function (curr) {
//   console.log(
//     curr[0].replace(curr[0], curr[0].toUpperCase()) + curr.slice(1, curr.length)
//   )
// })

// Solution #2:
// const changeName = function (arr) {
//   return arr.map((name) => name[0].toUpperCase() + name.slice(1))
// }
// console.log(changeName(fullName))
// 6. ----------------------------------------------------------------

