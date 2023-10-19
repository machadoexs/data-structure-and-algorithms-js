let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const isEven = x => x % 2 === 0

console.log(numbers.every(isEven))
console.log(numbers.some(isEven))
console.log(numbers.forEach(x => console.log(x % 2 === 0)))

const map = numbers.map(isEven)
console.log(map)

const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

const sumNumbers = numbers.reduce((previous, current) => previous + current)
console.log(sumNumbers)
