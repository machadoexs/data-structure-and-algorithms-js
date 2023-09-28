let params = [1,2,3]
function sum(a, b, c) {
  return a + b + c
}
console.log(sum(...params))

function restParameterFunction(a, b, ...c) {
  return (a + b) * c.length
}

console.log(restParameterFunction(1, 2, 'hello', true, 7))
