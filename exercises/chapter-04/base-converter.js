import StackObj from "../../js/stack/stack-obj.js";

function baseConverter(decimalNumber, base) {
  const remStack = new StackObj()
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let number = decimalNumber
  let rem
  let baseString = ''

  if(!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }
  while (!remStack.isEmpty()){
    baseString += digits[remStack.pop()]
  }
  return baseString;
}

console.log("Binario: " + baseConverter(100345, 2))
console.log("Binario: " + baseConverter(100345, 8))
console.log("Binario: " + baseConverter(100345, 16))
console.log("Binario: " + baseConverter(100345, 35))
