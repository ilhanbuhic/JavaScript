"use strict"

// Coding Challenge

// Separate only first and last names

let fullArr = ["David", "John", "Roger", "Buhic", 2, "Sterenborg", false]

// ---- //
let names = ["David", "John", "Roger"]
let lastNames = ["Buhic", "Sterenborg"]

let namesOnly = []
let lastNamesOnly = []

for (let i = 0; i < fullArr.length; i++) {
  if (names.includes(fullArr[i])) {
    namesOnly.push(fullArr[i])
  } else if (lastNames.includes(fullArr[i])) {
    lastNamesOnly.push(fullArr[i])
  }
}
console.log("Names:", namesOnly, "\nLast names:", lastNamesOnly)
