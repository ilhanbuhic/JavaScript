// Finding the smallest and the biggest number

const arr = [1, 2, 3, 4, 5, 6, 7, 0]
let max = 0
let min = arr[0]

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
}
console.log(`Biggest number: ${max}`)
console.log(`Smallest number: ${min}`)
