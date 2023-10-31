import StackObj from "../../js/stack/stack-obj.js";

function decimalToBinary(decimalNumber) {
  const remStack = new StackObj()
  let number = decimalNumber
  let rem
  let binaryString = ''

  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!remStack.isEmpty()){
    binaryString += remStack.pop().toString()
  }
  return binaryString;
}

console.log("Binario: " + decimalToBinary(233))
console.log("Binario: " + decimalToBinary(10))
