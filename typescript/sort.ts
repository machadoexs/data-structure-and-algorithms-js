interface Person {
  name: string;
  age: number;
}

const friends = [
  { name: 'Allan', age: 26 },
  { name: 'Luis', age: 24 },
  { name: 'Mama', age: 28 },
  { name: 'Henrique', age: 22 }
]

function comparePerson(a: Person, b: Person) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0
}
console.log(friends.sort(comparePerson))

