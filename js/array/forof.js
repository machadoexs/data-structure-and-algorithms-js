let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (const n of numbers) {
  console.log(n % 2 === 0 ? 'even' : 'odd')
}

iterator = numbers[Symbol.iterator]();

for (const n of iterator) {
  console.log(n)
}

aEntries = numbers.entries()
for (const n of aEntries) {
  console.log(n)
}

let newArray = Array.from(numbers)
console.log(newArray)

let newArray2 = Array.from(numbers, x => (x % 2 == 0))
console.log(newArray2)

let arrayOf = Array.of(1)
console.log(arrayOf)
let copyNumbers = Array.of(...newArray)
console.log(copyNumbers)

copyNumbers.fill(2, 1)
console.log(copyNumbers)

copyNumbers.fill(1, 3, 5)
console.log(copyNumbers)

let arrayOfSixOnes = Array(6).fill(1)
console.log(arrayOfSixOnes)
