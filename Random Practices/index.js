'use strict'

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

// 7. ----------------------------------------------------------------
// Separating only first and last names
// let fullArr = ["David", "John", "Roger", "Buhic", 2, "Sterenborg", false]

// let names = ["David", "John", "Roger"]
// let lastNames = ["Buhic", "Sterenborg"]

// let namesOnly = []
// let lastNamesOnly = []

// for (let i = 0; i < fullArr.length; i++) {
//   if (names.includes(fullArr[i])) {
//     namesOnly.push(fullArr[i])
//   } else if (lastNames.includes(fullArr[i])) {
//     lastNamesOnly.push(fullArr[i])
//   }
// }
// 7. ----------------------------------------------------------------

// Part #1:
// Take the 2 biggest numbers from arrays in the array and subtract them with 20

// const arr = [
//   [100, 23, 240, 45],
//   [23, 2315, 151, 232],
//   [232, 121, 50],
// ]

// const newArr = []

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].sort((a, b) => b - a))
// }

// for (let i = 0; i < newArr.length; i++) {
//   for (let j = 0; j < 2; j++) {
//     newArr[i][j] = newArr[i][j] - 20
//   }
// }
// console.log(newArr)

// Part #2:
// const arr = [ 200, 400, 320, 670, 940, 120]

// let temp = []
// let storedTemp = []

// for (let i = 0; i < arr.length; i++) {
//   temp.push(arr[i])
//   if (temp > arr[i + 1]) {
//     storedTemp = temp
//   } else {
//     temp.pop()
//   }
// }
// console.log(storedTemp)

// 8. ----------------------------------------------------------------

// Given an array of X strings in which each string consists of two lowercase English letters,
// join as many strings together as possible in order to obtain a palindrome.

// Input: arr = ["ck", "kc", "ho", "kc"]
// Output: 1. ckkc / 2. ckkc

// Make a polindrome combinations that can be achieved using first index[0] element

// const arr = ['ck', 'kc', 'ho', 'kc']

// let tempStr = [arr[0]]
// let palindromeElements = []
// const palindromeCombinations = []
// for (let i = 1; i < arr.length; i++) {
//   if (tempStr[0] === arr[i] || tempStr[0] === arr[i].split('').reverse().join('') && tempStr[0] !== arr) {
//     palindromeElements.push(arr[i])
//     palindromeCombinations.push(`Combination ${i}: ${tempStr[0]}, ${arr[i]}`)
//   }
// }
// console.log(palindromeElements, palindromeCombinations);
// 8. ----------------------------------------------------------------

// 9. ----------------------------------------------------------------

// Given an integer n, return a counter function.
// This counter function initially returns n and then returns
// 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// var createCounter = function (n) {
//   let count = n
//   return function () {
//     return count++
//   }
// }
// const counter = createCounter(10)
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 9. ----------------------------------------------------------------

// 10. ----------------------------------------------------------------
// Write code that enhances all arrays such that you can call the array.last()
// method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.

// Array.prototype.last = function() {
//   return this.length > 0 ? this[this.length-1] : -1
// };
// const arr = [1, 2, 3, 4]
// const last = arr.last()

// var checkIfInstanceOf = function(obj, classFunction) {
//   if (obj === null || obj === undefined || typeof classFunction !== 'function')
//   return Object(obj) instanceof classFunction
// };
// 10. ----------------------------------------------------------------

// 11. ----------------------------------------------------------------
// Given an array n, check if the second element of the array contains
// all the string characters as the first one and return boolean
// Input: [hey, hello] --> Output: false
// Input: [hey, helloy] --> Output: true

// const arr = ['heyo', 'hello']

// const firstLetter = arr[1].split('')

// // includedLetters = []

// for (let i = 0; i < arr[1].length; i++) {
//   if (arr[0].includes(firstLetter[i])) {
//     console.log(`Contains: ${firstLetter[i]}`);
//   }
// }

// 11. ----------------------------------------------------------------

// 12. ----------------------------------------------------------------
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Solution #1:
// const containsDuplicate = function (nums) {
// let checkDuplicate = {}
// for (let i = 0; i < nums.length; i++) {
//   let num = nums[i]
//   if (checkDuplicate[num] !== undefined) {
//     console.log(`Duplicate is found: ${num}`)
//     return true
//   } else {
//     checkDuplicate[num] = true
//   }
// }
// return false
// }

// Solution #2:
// const containsDuplicate = (nums) => {
//   for (let right = 0; right < nums.length; right++) {
//     for (let left = 0; left <= right; left++) {
//       let isDuplicate = nums[right] === nums[left]
//       if (isDuplicate) return true
//     }
//   }
//   return false
// }

// Solution #3:
// const containsDuplicate = function (nums, numSet = new Set()) {
//     for (const num of nums) {
//         if (numSet.has(num) === true) {
//             return true
//         } else numSet.add(num)
//     }
//     return false
// }

// Solution #4:
// const containsDuplicate = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         nums = nums.sort()
//         if (nums[i] === nums[i + 1]) {
//             return true
//         }
//     }
//     return false
// }

// Solution #5:
// const containsDuplicate = function (nums) {
//   const numSet = new Set(nums)
//   for (let i = 0; i < nums.length; i++) {
//     return nums.length === numSet.size ? false : true
//   }
// }

// console.log(containsDuplicate([1, 2, 3, 4, 1]))

// 12. ----------------------------------------------------------------

// 13. ----------------------------------------------------------------

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, typically using all the original letters exactly once.

// var isAnagram = function (s, t) {
//   for (const newS of s) {
//     return s.includes(t) ? true : false
//   }
// }
// console.log(isAnagram('car', 'rac'))

// 13. ----------------------------------------------------------------

// 14. ----------------------------------------------------------------
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Solution #1
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }
// 14. ----------------------------------------------------------------

// 15. ----------------------------------------------------------------
// Create all permutations of a non-empty input string and remove duplicates, if present
// Create as many 'shufflings' as possible

// Solution #1 --> Inefficient way
// const char = ['a', 'b', 'c']

// for (let i = 0; i < char.length; i++) {
//   for (let j = 0; j < char.length; j++) {
//     for (let k = 0; k < char.length; k++) {
//       if (char[i] !== char[j] && char[j] !== char[k] && char[i] !== char[k]) {
//         const comb = char[i] + char[j] + char[k]
//         console.log(comb);
//       }
//     }
//   }
// }

// Solution #2
// const chars = ['a', 'b', 'c'];

// function generateCombinations(arr, prefix = []) {
//   if (arr.length === 0) {
//     console.log(prefix.join(''));
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       const newPrefix = prefix.concat(arr[i]);
//       const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
//       generateCombinations(remaining, newPrefix);
//     }
//   }
// }
// generateCombinations(chars);

// Solution #3
// const char = ['a', 'b', 'c']

// const emptyObj = {}

// const generateCombinations = () => {
//   const tempArr = []
//   let randomIndexes = []

//   while (tempArr.length < char.length) {
//     let randomIndex = Math.floor(Math.random() * char.length)

//     if (!randomIndexes.includes(randomIndex)) {
//       tempArr.push(char[randomIndex])
//       randomIndexes.push(randomIndex)
//     }
//   }

//   if (!emptyObj[tempArr] && Object.keys(emptyObj).length >= 6) {
//     emptyObj[tempArr] = true
//   } else {
//     console.log('All combinations found')
//     return null
//   }

//   generateCombinations()
// }

// generateCombinations()

// console.log(emptyObj)

// Solve it by using recursive function

// Solution #4
const chars = ['a', 'b', 'c', 'd']
const combinations = []

function factorial(n) {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

const generateCombinations = (arr, combinations) => {
  function shuffleArray(arr) {
    const tempArr = []
    while (tempArr.length !== arr.length) {
      let randomIndex = Math.floor(Math.random() * arr.length)
      if (!tempArr.includes(arr[randomIndex])) {
        tempArr.push(arr[randomIndex])
      }
    }
    return tempArr.join('')
  }

  const randomCombination = shuffleArray(arr)
  if (!combinations.includes(randomCombination)) {
    combinations.push(randomCombination)
    generateCombinations(chars, combinations)
  } else {
    if (combinations.length >= factorial(arr.length)) {
      return null
    } else generateCombinations(chars, combinations)
  }
}
generateCombinations(chars, combinations)
console.log(combinations.join('\n'))
// 15. ----------------------------------------------------------------
