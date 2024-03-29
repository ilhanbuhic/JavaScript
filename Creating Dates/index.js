"use strict"

const account1 = {
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
}

const account2 = {
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
}

// First we need to create a date
// There are 4 ways of creating dates in JavaScript
// They all use New date constructor function, but they can accept different parameters

// // 1st way
// const now = new Date()
// console.log(now)
// // With this, we can get the current date and time at this very moment

// // 2nd way
// // The second way is to parse the date from a date string
// console.log(new Date("Aug 02 2023 19:47:00"))
// // This will automatically parse the time based on this (line: 14)
// console.log(new Date("December 24, 2018"))

// // 3rd way
// // Getting a date from an object
// console.log(new Date(account1.movementsDates[0]))
// // 'Z' string at the end of the date represents UTC(Coordinated Universal Time)
// // UTC is the time without any time zone in London, without daylight savings

// // 4th way
// // We can also pass in a year, month, day, hour, minute and second
// console.log(new Date(2025, 10, 19, 15, 23, 5))
// // Months in JavaScript are zero-based. In the (line: 50), we put 10, which should be October, but it shows November instead

// // JavaScript autocorrects the day
// console.log(new Date(2025, 10, 33)) // Trying to put November for 31 days, whilst it has 30, which is autocorrect the month to December

// // We can also pass into the date constructor function,
// // the amount of miliseconds passed since the begining of the Unix time, which is January 1, 1970
// console.log(new Date(0)) // 0 stands for 0 miliseconds after the Unix time - result: Jan 01 1970

// // Converting days to miliseconds
// console.log(new Date(3 * 24 * 60 * 60 * 1000))
// // The number that we calculated (line: 61) is a timestamp (number 259200000). It's a timestamp of the day number 3

// Dates are another type of object, which means that they have their own methods
// We can use these methods to get or to set components of a date
// Working with dates:
const future = new Date(2025, 10, 19, 15, 23)
console.log(future)
console.log(future.getFullYear()) // This method is used for showing the year
console.log(future.getMonth()) // This method is used for showing the month
console.log(future.getDate()) // This method is used for showing the day
console.log(future.getDay()) // This method is used for showing the day of the week
// When using .getDay() method, days are zero-based
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())

// We can also use ISO string for nicely formatted dates
console.log(future.toISOString())
// We can use this when we want to convert a particular date object into a string, so we can store it somewhere

// We can also get a timestamp for the date
// Timestamp is a miliseconds, which have passed since January 1, 1970
console.log(future.getTime()) // result: 1763562180000
// Now we can take this timestamp number and reverse (line: 84)
// We can create a new date only based on these miliseconds
console.log(new Date(future.getTime())) // It will give us exactly that same number: 2025-11-19T14:23:00.000Z

// Timestamps are so important, that there is a method that we can use to get the timestamp for right now
console.log(Date.now()) // This method is giving us the current timestamp

// There are also set version of all of these methods
future.setFullYear(2040) // In this case, only the day of the month will change
// This also perform autocorrection just like when we create a new date
