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

  insert(element, index) {
    if(this.validIndex(index)) {
      const node = new Node(element)
      if(this.firstIndex(index)) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
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
