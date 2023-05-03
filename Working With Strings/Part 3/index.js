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
