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
}

const list = new LinkedList()
list.push(15)
list.push(10)
console.log(list)
