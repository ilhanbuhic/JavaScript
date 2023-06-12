"use strict"

// Coding Challenge

// Check if the word is anagram

let ang1 = "silent"
let ang2 = "lisent"

let ang1Sort = ang1.split("").sort().join("")
let ang2Sort = ang2.split("").sort().join("")

if (ang1Sort === ang2Sort) console.log("Word is anagram")
