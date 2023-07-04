"use strict"

// Strings:
// If we want to sort some array alphabetically from A - Z, we use the .sort() method
const owners = ["Jonas", "Zach", "Adam", "Martha"]
console.log(owners.sort())
// .sort() method mutates the original array
console.log(owners)

// Numbers:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements)
console.log(movements.sort())
// After using the .sort() method on the 'movements' array, the elements are not ordered
// The reason for this is that the .sort() method does the sorting based on strings
// It converts everything to strings and then it does the sorting itself

// We can fix this by passing in a compare callback function into the .sort() method
// This callback function is called with 2 arguments
movements.sort((a, b) => {
  // These 2 parameters are the current value and the next value
  // If we return less than 0, then the value 'a' will be sorted before value 'b': return < 0 => A, B (keep order)
  // If we return a positive value, then 'a' will be returned before 'b': return > 0 => B, A (switch order)
  // We can use this to sort 'movements' array in ascending order
  // Ascending order means that we want to go from small to large numbers
  if (a > b) return 1
  if (a < b) return -1
})

// If a > b, then we will have a positive number, therefore we return that positive number
// If a < b, then we will have a negative number, therefore we return the negative number
// If we return 0, in case that 'a' and 'b' are the same, then their position will remain unchanged
// With this, we can make the code (line: 20) a lot smaller

movements.sort((a, b) => a - b)

console.log(movements)
