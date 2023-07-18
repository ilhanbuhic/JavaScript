"use strict"

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
}

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
}

const accounts = [account1, account2]

/* In JavaScript all numbers are represented internaly as a floating point numbers
 Always as decimals no matter if we write them as integers or as decimals
*/
console.log(23 === 23.0)
/* Numbers are represented internaly in a 64 bit format
 That means that numbers are always stored in a binary base-2 format
 They are only composed of 0 and 1
 In this binary form it is very hard to represent some fractions that are very easy to represent in base-10 format
 Base-10 is numbers from 0 - 10, while biinary is base-2, which contains of numbers 0 and 1
 There are numbers that are very difficult to represent in base-2
 Example of that is franction 0.1
 This number results in very weird results:
*/
console.log(0.1 + 0.2) // log: 0.30000000000000004
/* Unfortunately, JavaScript has no better way of representing this number
In some cases, JavaScript does some rounding behind the scenes to try its best to hide these problems,
but some operations, such as (line: 56), cannot  represent certain fractions
Many other languages use the same system
*/

// Converting strings to a number:
console.log(Number("23"))
console.log(+"23")
// This (line: 67) works because when JavaScript sees the plus operator, it will do type coercion
// It will automatically convert all the operands to numbers
