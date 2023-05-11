"use strict"

// Functions returning functions

// Example #1:
const greet1 = (greeting) => {
  return function (name) {
    console.log(`${greeting}, ${name}`)
  }
}
const greeterHey = greet1("Hey")
greeterHey("Ilhan")

greet1("Hey")("Buha")

// Example #1 with arrow functions:
// const greet2 = (greeting) => (name) => {
//   console.log(`${greeting}, ${name}`)
// }
// greet2("Hey")("Ilhan")

// Example #2:
const str1 = (person) => {
  return function (verb) {
    return function (which) {
      return function (what) {
        console.log(`${person} ${verb} ${which} ${what}`)
      }
    }
  }
}
str1("I")("learn")("JavaScript")("language")

// Example #2 with arrow functions:
// const str2 = (person) => (verb) => (which) => (what) =>
//   console.log(`${person} ${verb} ${which} ${what}`)

// str2("I")("learn")("JavaScript")("language")
