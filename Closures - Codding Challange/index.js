"use strict"

// Closures - Coding Challange

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, 
each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. 
Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
*/
;(function () {
  const header = document.querySelector("h1")
  header.style.color = "red"

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue"
  })
})()

/* In this example, the closure in necessary. The callback function (line: 16) is executed
This IIFE is long gone. It has already been executed and with it 'header' variable is basically gone as well,
but still the function (line: 16) is attached to the body element
Even though the environment in which this function was created is already gone, it is still able to access the variables
that were created in that variable */
