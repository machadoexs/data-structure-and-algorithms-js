// @ts-check

class StackObj {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count == 0
  }

  pop() {
    if(this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear() {
    while(!this.isEmpty()) {
      this.pop()
    }
  }

  toString() {
    if(this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let index = 1; index < this.count; index++) {
      objString = `${objString},${this.items[index]}`
    }
    return objString;
  }
}

const stackObj = new StackObj()
stackObj.push(5)
stackObj.push(8)

console.log(stackObj)
console.log(stackObj.size())
stackObj.pop()
console.log(stackObj.peek())
stackObj.push(11)
console.log(stackObj.toString())
