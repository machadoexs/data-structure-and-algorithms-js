// @ts-check
function factorialIterative(number) {
  if (number < 0) return undefined
  let total = 1
  for (let n = number; n > 1; n--) {
    total = total * n
  }
  return total
}

console.log('factorialIterative(5): ' + factorialIterative(5))

function factorialRecursion(number) {
  if (number === 1 || number === 0) {
    return 1
  }
  return number * factorialRecursion(number - 1)
}
console.log('factorialRecursion(5): ' + factorialRecursion(5))
