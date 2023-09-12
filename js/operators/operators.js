var num = 0;

console.log("OPERADORES ARITMÉTICOS")

console.log("Numero incial: " + num)
console.log("Soma: num + 2 = " + (num + 2))

console.log("Numero atual: " + num)
console.log("Subtração: num - 2 = " + (num + 2))

console.log("Numero atual: " + num)
console.log("Multiplicação: num * 2 = " + (num * 2))

console.log("Numero atual: " + num)
console.log("Divisão: num / 2 = " + (num / 2))

console.log("Numero atual: " + num)
console.log("Resto da operação de divisão: num % 2 = " + (num % 2))

console.log("Numero atual: " + num)
console.log("Incremento: num++ = " + (num++))

console.log("Numero atual: " + num)
console.log("Decremento: num-- = " + (num--))


console.log("======================")
console.log("OPERADORES DE ATRIBUIÇÃO")

console.log("Numero atual: " + num)
console.log("Atribuição: num = 2 = " + (num = 2))

console.log("Numero atual: " + num)
console.log("Atribuição de soma: num += 2 => num = num + 2 = " + (num += 2))

console.log("Numero atual: " + num)
console.log("Atribuição de subtração: num -= 2 => num = num - 2 = " + (num -= 2))

console.log("Numero atual: " + num)
console.log("Atribuição de multiplicação: num *= 2 => num = num * 2 = " + (num *= 2))

console.log("Numero atual: " + num)
console.log("Atribuição de divisão: num /= 2 => num = num / 2 = " + (num /= 2))

console.log("Numero atual: " + num)
console.log("Atribuição de resto: num %= 2 => num = num % 2 = " + (num %= 2))

console.log("======================")
console.log("OPERADORES DE COMPARAÇÃO - Boolean")

num = 0
console.log("Numero atual: " + num)

console.log("Igual a: num == 2 => " + (num == 2))
num = 2
console.log("Igual a: num == 2 => " + (num == 2))

console.log("Numero atual: " + num)
console.log("Igual a valor e tipo: num === 2 => " + (num === 2))
num = 0
console.log("Igual a valor e tipo: num === 2 => " + (num === 2))

console.log("Numero atual: " + num)
console.log("Diferente de: num != 2 => " + (num != 2))
num = 2
console.log("Diferente de: num != 2 => " + (num != 2))

console.log("Numero atual: " + num)
console.log("Maior que: num > 2 => " + (num > 2))
num = 0
console.log("Maior que: num > 2 => " + (num > 2))

console.log("Numero atual: " + num)
console.log("Maior ou igual a: num >= 2 =>" + (num >= 2))
num = 2
console.log("Maior ou igual a: num >= 1 =>" + (num >= 1))

console.log("Numero atual: " + num)
console.log("Menor que: num < 1 => " + (num < 1))
num = 0
console.log("Menor que: num < 2 => " + (num < 2))

num = 2
console.log("Numero atual: " + num)
console.log("Menor ou igual a: num <= 2 => " + (num <= 2))
console.log("Menor ou igual a: num <= 1 => " + (num <= 1))

console.log("======================")
console.log("OPERADORES LÓGICOS")

console.log("&&: {true && false} => " + (true && false))
console.log("&&: {true && true} => " + (true && true))
console.log("&&: {false && false}  => " + (false && false))

console.log("||: {true || false} => " + (true || false))
console.log("||: {true || true} => " + (true || true))
console.log("||: {false || false}  => " + (false || false))

console.log("!: {!false} => " + (!false))
console.log("!: {!true} => " + (!true))


console.log("======================")
console.log("OPERADORES BIT A BIT - BITWISE")

console.log("E: 5 & 1: " + (5 & 1))
console.log("OU: 5 | 1: " + (5 | 1))
console.log("NEGAÇÃO: ~ 5: " + (~5))
console.log("OU EXCLUSIVO (XOR): 5 ^ 1: " + (5 ^ 1))
console.log("DESLOCAMENTO PARA A EQUERDA (LEFT SHIFT): 5 << 1: " + (5 << 1))
console.log("DESLOCAMENTO PARA A DIREITA (RIGHT SHIFT): 5 >> 1: " + (5 >> 1))

console.log("======================")
console.log("OPERADORES TYPE OF")

console.log("typeof num: " + typeof num)
console.log("typeof 'string': " + typeof "some_string")
console.log("typeof true: " + typeof true)
console.log("typeof [1,2,3]: " + typeof [1,2,3])
console.log("typeof {name: 'Vitor'}: " + typeof {name: "Vitor"})
