"use strict"

const arr = [1, 2, 3, 4, 5]

function myForEach(callback, array) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

const mycallback = (v) => {
  console.log(v)
}

// myForEach((v)=>console.log(v), arr);
myForEach(mycallback, arr)
