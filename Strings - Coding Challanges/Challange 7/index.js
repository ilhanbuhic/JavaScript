"use strict"

// Coding Challenge

// Separating only even number in a nested array

const arr = [
  [3, 4, 9, 10],
  [13, 17, 20, 65],
  [25, 92, 43, 57],
]

const even = []
for (let i = 0; i < arr.length; i++) {
  const nestedArray = []
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] % 2 === 0) {
      nestedArray.push(arr[i][j])
    }
  }
  even.push(nestedArray)
}
console.log(even)
