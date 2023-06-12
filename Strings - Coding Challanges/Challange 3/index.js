"use strict"

// Coding Challenge

// Seperate the words that have the letter 'a' as the second letter of the word
let words = [
  "Banana",
  "Animal",
  "Amazing",
  "Attack",
  "Annual",
  "Against",
  "Car",
  "Map",
]
let newWords = []

for (let i = 0; i < words.length; i++) {
  if (words[i][1] === "a") {
    newWords.push(words[i])
  }
}
console.log(newWords)
