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
