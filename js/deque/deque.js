export default class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  addFront(element) {
    if(this.isEmpty()) {
      this.addBack(element)
    } else if(this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  // Queue enqueue
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }

  // Queue dequeu
  removeFront() {
    if(this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  // Stack pop
  removeBack() {
    if(this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  // Stack peek
  peekBack() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  // Queue peek
  peekFront() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  // stack e queue
  size() {
    return this.count;
  }

  isEmpty() {
    return this.count == 0
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

const deque = new Deque();
console.log(deque.isEmpty())
deque.addBack("VITOR")
deque.addBack("MACHADO")
console.log(deque.toString())
deque.addBack("LAIS")
console.log(deque.toString())
console.log(deque.size())
console.log(deque.isEmpty())
deque.removeFront()
console.log(deque.toString())
deque.addFront("SANTOS")
console.log(deque.toString())
