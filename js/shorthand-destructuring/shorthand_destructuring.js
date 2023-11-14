// ARRAY DESTRUCTURING
let [x, y] = ['a', 'b']
// var x = 'a'
// var y = 'b'

console.log(x) // a
console.log(y) // b

// PROPERTY SHORTHAND
// [x, y] = [y, x]
var temp = x
x = y
y = temp

console.log(x) // b
console.log(y) // a

let [a, b] = ['x', 'y']
let obj = {a, b}

console.log(obj)

// SHORTHAND METHOD NAMES
const hello = {
  name: 'hello',
  printHello() {
    console.log(this.name)
  }
}

console.log(hello.printHello())
