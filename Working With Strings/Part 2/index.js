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

// \Program

// Replacing parts of strings / strings
// Replace() method is case sensitive, as well as all other string methods
console.log(`\n---- Replacing parts of strings ----`)
const priceGB = "288,97£"
const priceUSA = priceGB.replace("£", "$").replace(",", ".")
console.log(priceUSA)

const announcement = `All passangers come to boarding door 23. Boarding door 23!`
// We will use replaceAll() instead of replace(), because replace() only replaces the first occurance of search string
console.log(announcement.replaceAll("door", "gate"))
// We can also use another way, which is called 'regular expression'
// This is a very simple regular expression. We will tell the replace() method that it should target all the occurrences of 'door' and not just the first one
// To write a regular expression, we need to wring the string between slashes, not between quotes
// We're also going to add a 'g' flag, which stands for 'global'
console.log(announcement.replace(/door/g, "gate"))

// Methods that return booleans
// Include() method
// This method returns boolean
// It's used to check whether if a variable includes some strings
console.log(`\n--- Include(), startsWith(), endsWith() ---`)
const plane = "Airbus A320neo"
console.log(plane.includes("A320"))

// startsWith() method
// This method checks if the variable that is assigned to a string starts with some strings that you pass in to this method
console.log(plane.startsWith("Air"))

// endsWith() method
// Making a program that is going to check if the current plane is part of the new Airbus family
console.log(`\n---- Exercise 1 ----`)
if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log(`${plane} is part of the new Airbus famiily}`)
}

// Exercise - We want to check if the baggage of a certain passanger is allowed to be checked-in

console.log(`\n---- Exercise 2 ----`)
const checkBaggage = (items) => {
  if (items.includes("knife") || items.includes("gun")) {
    console.log(`Your baggage is not allowed to check-in`)
  } else {
    console.log(`Your baggage is allowed to be checked-in`)
  }
}

console.log(`\n---- Exercise 2(with FOR loop) ----`)
// This could've been done a lot simpler, but I like to complicate it sometimes
// const checkBaggage = (items) => {
//   let notAllowedGun = false
//   let notAllowedKnife = false
//   const a = items.toLowerCase().split(" ")
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === "knife") {
//       notAllowedKnife = true
//       // console.log(`Your baggage is not allowed to check-in`)
//     } else if (a[i] === "gun") {
//       notAllowedGun = true
//       // console.log(`Your baggage is not allowed to check-in`)
//     }
//   }
//   if (notAllowedGun && notAllowedKnife) {
//     console.log("We found a gun and a knife")
//   } else if (notAllowedGun) {
//     console.log("We found a gun")
//   } else if (notAllowedKnife) {
//     console.log("We found a knife")
//   } else {
//     console.log("Welcome!")
//   }
//   Returning these variables to default values, otherwise it would interfere whenever we call the function next time
//   That's because once the variables in the function change, they stay the way they were changed
// }
checkBaggage("I have a laptop, some food and a pocket Knife")
checkBaggage("Socks and camera")
checkBaggage("Got some snacks and gun for a protection")
