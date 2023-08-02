"use strict"

// From ES2021, we can use a feature called 'numeric separators' to format numbers
// We want to represent a very large number

// Diameter of our solar system
const diameter1 = 287460000000
// Generally this number is really big and hard to understand it
// Does it means 28 bilion, is it just 2 milion?
// Normally, we would use a thousand separator: 287, 460, 000, 000
// We can do the same thing in JavaScript using the new number separators
// Numberic separators are underscores that we can place anywhere that we want in our numbers
const diameter2 = 287_460_000_000
console.log(diameter2)
// The engine will ignore these underscores, but it will see the number itself
const transferFee1 = 15_00
const transferFee2 = 1_500

console.log(Number('230000')) // This will work
console.log(Number('230_000')) // This will not work

console.log(parseInt('230_000')) // This will also not work as expected
// This will only log the part that is in front of the underscore, everything else will be ignored
