import Deque from "../../js/deque/deque.js";

function palindromeChecker(aString) {
  if(
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }
  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true
  let firstChar
  let lastChar

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i))
    console.log(lowerString[i])
  }

  while(deque.size() > 1) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      return false
    }
  }
  return isEqual;
}

console.log('a', palindromeChecker('a'))
console.log('aa', palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('level', palindromeChecker('level'))
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'))
console.log('Step on no pets', palindromeChecker('Step on no pets'))
