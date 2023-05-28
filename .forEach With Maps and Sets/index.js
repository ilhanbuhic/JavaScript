"use strict"

// Map:
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
])

// Each of these array elements, the inner array will be one entry of the map,
// where 'USD', 'EUR', 'GBP' are the keys, and others are values

// We can call .forEach also on a map
// When the .forEach method calls the function, it will call it with three arguments:
// 1. Current value 2. Key 3. Entire map
currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`)
})

// Set:
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
// console.log(currenciesUnique)
currenciesUnique.forEach(function(value, key, set) {
  console.log(`${key}: ${value}`)
})
// Using the Set method, keys are exactly as values
// That's because a set doesn't have keys and it doesn't have indexes either
// Developers did this, because they didn't want to make a confusion
// They've decided to keep the same "signature"
// keep the same three parameters in a callback function and set the second one to the first one

// Instead of 'key' parameter, we can use '_', which in JavaScript means a throwaway variable
// That means the variable that is completely unnecessary
// currenciesUnique.forEach(function(value, _ , set)...)