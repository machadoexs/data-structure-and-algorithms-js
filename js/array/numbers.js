let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[numbers.length] = 10
// console.log(numbers)

numbers.push(11)
numbers.push(12, 13)
// console.log(numbers)

Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1]
  }
  this[0] = value
}
numbers.insertFirstPosition(-1)
numbers.unshift(-2)
numbers.unshift(-4, -3)
// console.log(numbers)

numbers.pop()
console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1]
  console.log(numbers)
}
