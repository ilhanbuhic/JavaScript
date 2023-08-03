"use strict"

// BigInt is a special type of integer that was introduced in ES2020
// Numbers are represented internally as 64 bits
// that means that there are exactly 64 1 or 0 to represent any given number
// Of these 64 bits, only 53 are used to the digits itself
// the rest are for storing the position of the decimal point and a sign
// If there are only 53 bits to store the number, that means that there's a limit of how big numbers can be

// We can calculate that number
console.log(2 ** 53 - 1) // We use minus here, because the numbers starts at 0
// This is the biggest number that JavaScript can safely represent
// It is |2| (2 ** 53 -1), because we are working with base-2, which is only 0 and 1
// This number is so important, that it's even stored into the number namespace
console.log(Number.MAX_SAFE_INTEGER)
// Any integer that is larger than this, is not safe and that means it cannot be represented accurately
// JavaScript behind the scenes uses some trick to still represent some of the unsafe numbers,
// this sometimes works, sometimes it doesn't. That's why we call them unsafe numbers

// This can be a problem sometimes, because in some situations we might need really big numbers, way bigger than (line: 11),
// for example for database IDs or when interacting with real 60 bit numbers

// BigInt can be used to store numbers as large as we want, no matter how big
// If we need this number:
console.log(3290185904890859034449032193) // Result: 3.290185904890859e+27
// This number is not precise at all, but we can use 'n' at the end of a number, which will represent BigInt
console.log(3290185904890859034449032193n)
// This 'n' transforms a regular number, into a BigInt number

// We can also use BigInt, by using the BigInt function
console.log(BigInt(3290185904890859034449032193))
// The results from (line: 27) and (line: 31) are different
// It's better to represent big numbers using the code (line: 27), because in that case,
// JavaScript will transform this number to BigInt straight away, but using BigInt function,
// it will first represent this the number internally, before it can then transform it into a BigInt
// We should use 'n' when working with big numbers and use BigInt function when working with a little smaller numbers

// Operators work just the same with BigInt
console.log(10000n + 10000n)
console.log(8453495933290450925489032843920098534n * 10000n)
// It's not possible to mix BigInts with regular numbers

console.log(20n === 20)
// This is false, because triple operator does not do type coercion
// These two values have different primitive type
console.log(typeof 20n, typeof 20)

// We also can't use math operations with big ints
// console.log(Math.sqrt(16n)) // This will not work

// Division
console.log(10n / 3n) // Result: 3n
// This will return the closest number and cut the decimal part off
