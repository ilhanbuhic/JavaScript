"use strict"

const airline = "TAP Air Portugal"

// Changing the case of a string
console.log(airline.toLowerCase())
console.log(airline.toUpperCase())
// We can call these methods directly on a string
console.log("Ilhan".toUpperCase())

// Creating a function that takes any passanger name and returns the correct one
console.log("\n---- Function ----")
const passangerNameCheck = (passanger) => {
  const passangerLower = passanger.toLowerCase()
  const passangerCorrect =
    passangerLower[0].toUpperCase() + passangerLower.slice(1)
  console.log(passangerCorrect)
}
passangerNameCheck("IlHAn")

// Program:
console.log(`\n---- Program ----`)
// Comparing emails (removing WHITE SPACE, converting uppercase to lowercase, removing ENTER)
const email = "hello@ilhan.io"
const logInEmail = "  Hello@Ilhan.Io \n"
const emailLower = logInEmail.toLowerCase()
// Trim() method removes all the WHITE SPACE and NEW LINES from a string that it's called to
const trimmedEmail = emailLower.trim()
email === trimmedEmail
  ? console.log("Email is correct!")
  : console.log("Email is not correct! Try again.")
console.log(trimmedEmail)
console.log(trimmedEmail.length)

// Making a function that removes WHITE SPACE and NEW LINES
let result = ""
const emailFormatter = (email) => {
  for (let i = 0; i < email.length; i++) {
    if (email[i] !== " " && email[i] !== "\n") {
      result += email[i]
    }
  }
  console.log(result)
  console.log(result.length)
}
emailFormatter(emailLower)
