"use strict"

const arr = [1, 2, 3, 4, 5]

const myMap = (callback, array) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array))
  }
  return newArray
}

myMap((n) => console.log(n), arr)
