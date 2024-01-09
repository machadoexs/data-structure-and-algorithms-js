function fibonacciIterative(number) {
  if(number < 1) return 0
  if(number <= 2) return 1
  let fibMinus2 = 0;
  let fibMinus1 = 1;
  let fibN = number
  for (let i = 2; i <= number; i++) {
    fibN = fibMinus1 + fibMinus2
    fibMinus2 = fibMinus1
    fibMinus1 = fibN
  }
  return fibN
}

console.log('fibonacciIterative(20): ' + fibonacciIterative(20))

function fibonacciRecursion(number) {
  if(number < 1) return 0
  if(number <= 2) return 1
  return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2)
}
console.log('fibonacciRecursion(20): ' + fibonacciRecursion(20))
