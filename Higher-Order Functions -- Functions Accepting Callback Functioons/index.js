"use strict"

// Creating a function that accepts other function's input
// Writing 2 generic functions that will do string transformations

const oneWord = (str) => {
  console.log(str.length)
  //   return str.replace(" ", "")
  return str.replace(/ /g, "").toLowerCase()
}

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ")
  return [first.toUpperCase(), ...others].join(" ")
}

// After creating these 2 generic functions, we can create a higher-order function
// This function will take 2 arguments, string and a function as a second argument

// Example #1:
// Higher-order function
const transformer = (str, fn) => {
  // Callback functions are here called 'fn'
  console.log(`Original string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`)

  /* Functions even have methods and besides them,
   functions can even have properties and one of them
   is a .name property */
  console.log(`Transformed by: ${fn.name}`)
  // This property give us the name of function
}

console.log("---- upperFirstWord ----")
transformer("JavaScript is the best!", upperFirstWord)
console.log("---- oneWord ----")
transformer(`JavaScript is the best!`, oneWord)

// Example #2:

const highFive = () => {
  console.log("✋")
}
document.body.addEventListener("click", high5)
// In this case 'high5' is a callback function, which is event handler / event listener
// Conceptually, addEventListener is a higher-order function and 'high5' is a callback function

/* JavaScript uses callback functions all the time
1. Advantage of this is that it makes it easy to split up our code into more resusable parts
2. Callback functions allow us to create abstraction
Abstraction means is that we hide the detail of some code implementation,
because we don't really care about all those details and this allows us to think at a higher,
more abstract level
*/
