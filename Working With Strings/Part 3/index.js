"use strict"

// Split() method allows us to split strings into multiple parts based on devider string
console.log("a+very+nice+string".split("+"))
// Split() will store the results into elements of a new array
console.log("Ilhan Buhic".split(" "))

// We can use the power of destructuring to create variables

const [firstName, lastName] = "Ilhan Buhic".split(" ")
console.log(firstName, lastName)

// We want for the name to start with 'Mr.', first and last name being uppercased
// We use join() method to put strings together with whatever is passed into that method
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ")
console.log(newName)

// Making a program that will capitalize first letter of names
// 1st way
// console.log("---- Practice ----")
// const capitalizeName = (name) => {
//   const names = name.split(",") // ['ilhan buhic']
//   let namesUpper = []
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1))
//   }
//   console.log(namesUpper.join(" "))
// }
// console.log("nesto bla".split(" "))
// capitalizeName("jessica ann smith davis")
// capitalizeName("ilhan buhic")

// 2nd way
const capitalizeName = (name) => {
  const names = name.split(" ")
  let namesUpper = []
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(" "))
}
capitalizeName("ilhan buhic")

// Padding
// Padding a string means to add the number of characters to the string, until that string has a certain, desired length
// padStart() will add characters to the begining of the string*/
const message = "Go to gate 23!"
console.log(message.padStart(20, "-").padEnd(25, "-"))

// Program that will implement masking of credit cards
// 1st way
console.log(`\n---- Mask Credit Card ----`)
// const maskCreditCard = (number) => {
//   const str = number + ''
//   const last = str.slice(-4)
//   let masked = ''
//   console.log(masked = last.padStart(str.length, 'X'))
// }

// 2nd way
const maskCreditCard = (number) => {
  let complete = ""
  //converting a number into a string
  const str = number + ""
  // the result of this will be a number, but as a string
  // this works because if one of the operands of + sign is the string, it will convert all the operands into string
  const last = str.slice(-4)
  const masked = last.padStart(str.length, "X")
  const splitted = masked.split("")
  for (let i = 0; i < splitted.length; i++) {
    complete += splitted[i]
    if ((i + 1) % 4 === 0 && i !== splitted.length - 1) {
      complete += "-"
    }
  }
  return complete
}
console.log("Credit Card: ", maskCreditCard(8328923098522074))

// Repeat() method
console.log(`\n---- Repeat() method`)
// This method allows us to repeat the same string multiple times
const message2 = "Bad weather... All flights delayed"
console.log(message2.repeat(5))

const planeInLine = (plane) => {
  console.log(`There are ${plane} planes in line ${"✈️".repeat(plane)}.\n`)
}
planeInLine(`5`)
