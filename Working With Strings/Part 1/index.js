"use strict"

const airline = "TAP Air Portugal"
const plane = "A320"

// Just like in arrays, we can get the character of a string at a certain position
console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
// We can also do it directly
console.log(`B737`[0])
// We can also read the length of strings, just like in arrays
console.log(airline.length)
// We can also read the length directly on the string
console.log(`B737`.length)

// Methods:
// We use '.indexOf()' to check the position of a certain letter in the string
console.log(airline.indexOf("r")) // Strings are also 0-based
// We use '.lastIndexOf()' to check the last position of a certain letter in the string
console.log(airline.lastIndexOf("r")) // SPACE also counts as a character
// We can also search for the entire words using
console.log(airline.indexOf("Portugal")) // This method is case-sensitive

// .slice() method
// We can extract part of a string using the '.slice()' method. '.slice()' method needs indexes as arguments
console.log(airline.slice(4)) // This '4' is the begin parameter. It's the position in which the extraction will start
// It's impossible to mutate strings, because they are primitive values
// If we wanted to use this string now, we would have to store it first, into some variable or data structure
// These kinds of methods always returns a new string

// We can also define an end parameter using '.slice()' method
console.log(airline.slice(4, 7)) // The end value (SPACE in this case) is not included in the string
// It stops extracting before reaching index number 7
// The length of the extracted string is always going to be end minus beginning (7-4 in this case)
// If we don't specify the end, it will extract everything until the end

// Extracting the strings of the first word from 'airplane' variable, without knowing any of the indexes
console.log(airline.slice(0, airline.indexOf(" ")))
// Extracting the strings of the first word from 'airplane' variable, without knowing any of the indexes
console.log(airline.slice(airline.lastIndexOf(" ") + 1))

// We can define a negative begin argument
console.log(airline.slice(-2)) // This will start extracting from the end
console.log(airline.slice(1, -1)) // We started at position 1 and the negative parameter cuts off the last letter

// Write a function that receives an airplane seat and logs to the console whether if it's a middle seat or not
console.log("\n----AIRPLANE SEAT----")
const checkMiddleSeat = (seat) => {
  const s = seat.slice(-1)
  s === "E" || s === "B"
    ? console.log("Middle seat")
    : console.log("Not a middle seat")
}
checkMiddleSeat("11B")

// Why does all of this works? We know that strings are primitive values, so why do they have methods?
// Because we know that methods are only available in objects, such as arrays
// Whenever we call a method on a string, JavaScript will automatically, behinds the scenes, convert a string primitive to a string object with the same content
// And then, it's on that object where the methods are called. This process is called Boxing, because it takes our string and puts it into a box which is the object
// What happens is this:
console.log(new String("Ilhan"))
console.log(typeof new String("Ilhan"))
// Whenever we call a method on a string, JavaScript converts an array into an object. When the operation is done, the object is converted back into a regular string primitive
