interface Person {
  name: string
  age: number
}

function printName(person: Person) {
  console.log(person.name)
}

const vitor = { name: 'Vitor', age: 26 }
const diogo = { name: 'Diogo', age: 30, phone: '11999999999'}

printName(vitor)
printName(diogo)

