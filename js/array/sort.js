let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
numbers.reverse()
console.log(numbers)
numbers.sort()
console.log(numbers)

numbers.sort((a, b) => a - b)
console.log(numbers)

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0
}
numbers.sort(compare)
console.log(numbers)

const friends = [
  { name: 'Allan', age: 26 },
  { name: 'Luis', age: 24 },
  { name: 'Mama', age: 28 },
  { name: 'Henrique', age: 22 }
]
function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0
}
console.log(friends.sort(comparePerson))
console.log(friends.sort((a,b) => a - b))
