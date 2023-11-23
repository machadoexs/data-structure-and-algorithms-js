import { defaultEquals } from "../util.js";
import { Node } from "../models/linked_list_models.js";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element)

    let current
    if(this.head == null) {
      this.head = node
    } else {
      current = this.head
      while(current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt(index) {
    if(this.validIndex(index)) {

      let current = this.head

      if(this.firstIndex(index)) {
        this.head = this.head.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }

  remove(element) {
    let index = this.removeAt(element)
    return this.removeAt(index)
  }

  insert(element, index) {
    if(this.validIndex(index)) {
      const node = new Node(element)
      if(this.firstIndex(index)) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if(this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next
    }
    return -1;
  }

  getElementAt(index) {
    if(this.validIndex(index)) {
      let node = this.head
      for (let i = 1; i <= index; i++) {
        node = node.next
      }
      return node;
    }
    return undefined;
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString;
  }

  validIndex(index) {
    return index >= 0 && index <= this.count
  }

  firstIndex(index) {
    return index === 0
  }
}

const list = new LinkedList()
list.push(15)
list.push(10)
console.log(list)
list.removeAt(1)
console.log(list)
list.push(22)
console.log(list.getElementAt(0))
console.log(list.toString())
list.push(5)
list.push(223)
console.log(list.toString())
