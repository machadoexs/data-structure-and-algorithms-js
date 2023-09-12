function sayHello() {
  console.log("Hello!")
}

sayHello()

function output(text) {
  console.log(text)
}

output("Text pass for the function as parameter")
output("Hello", "Ignored Hello")

function sum(num1, num2) {
  return num1 + num2
}

var result = sum(1, 1)
output(result)
