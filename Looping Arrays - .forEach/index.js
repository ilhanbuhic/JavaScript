"use strict"

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

for (const m of movements) {
  m < 0
    ? console.log(`You withdrew ${Math.abs(m)}`)
    : console.log(`You deposited ${m}`)
  // Math.abs() function is to take the absolute value, removing the sign
}

console.log("----- forEach -----")
// .forEach() method:
movements.forEach(
  /* .forEach requires callback function */ function (movement1) {
    // .forEach() method loops over an array and in each iteration it will execute a callback function
    /* as .forEach() method calls this callback function,
    in each iteration it will pass in the current elements of the array as an argument
    // (movement) in this case // */
    if (movement1 > 0) {
      console.log(`You deposited ${movement1}`)
    } else {
      console.log(`You withdrew ${Math.abs(movement1)}`)
    }
  }
)

/* .forEach() behind the scenes, in iteration 0, it will call the function:
0: function(200)
1: function(450)
2: function(400) */

/* We use a callback function to tell another, higher-order function exactly what to do
In this case, we are telling .forEach that in each iteration it should log one of these
two strings to the console
We are giving the .forEach() function instructions by giving it a callback function,
which contains these instructions */

/* What if we needed access to a counter variable/current index of an array?
Using forEach loop, it's a lot easier to get access to the current index,
instead of using .entries()/.values()/.keys() methods */

/* Because .forEach method calls the callback function in each iteration
As it calls that function, it also passes in the current element of an array
.forEach also passes in the current element, the index and an entire array that we are looping
We can specify them in the parameter list */

console.log("----- forEach & index -----")
// .forEach() & index method:
movements.forEach(function (movement2, index, array) {
  // 1. The first parameter always needs to be the current element (line: 50)
  // 2. The second parameter always needs to be the current index (line: 50)
  // 3. The third parameter always needs to be the entire array (line: 50)

  console.log(`Movement: ${movement2}\nIndex: ${index}\nArray:${array}`)
})

/* The fundamental difference between .forEach loop and FOR OF loop is that you cannot break out of .forEach loop
The continue and break statements do not work in a .forEach loop at all
.forEach will always loop over the entire loop array */
