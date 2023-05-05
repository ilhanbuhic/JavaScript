"use strict"

// Coding Challenge

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data! 
*/

document.body.append(document.createElement("textarea"))
document.body.append(document.createElement("button"))
const button = document.querySelector("button")

// document.createElement("button")
// document.createElement("textarea")
// document.body.append(text)
// document.body.append(button)

// With ticks:

// button.addEventListener("click", function () {
//   // 1. Retrieving the value from DOM input
//   // We have to declare querySelector with .value inside of a event handler, otherwise it won't work
//   const text = document.querySelector("textarea").value
//   // Splitting text.value to get elements that are separated by a new line
//   const rows = text.split("\n")
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_")
//     // console.log(first, second)
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`)
//     console.log(i, row)
//   }
// })

// Without ticks:

button.addEventListener("click", function () {
  const text = document.querySelector("textarea").value
  const row = text.split("\n")
  // console.log(row)
  for (const n of row) {
    const [first, second] = n.toLowerCase().trim().split("_")
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`
    console.log(output)
  }
})

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
