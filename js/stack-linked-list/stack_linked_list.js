import { DoublyLinkedList } from "../doubly-linked-list/doubly_linked_list.js";

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList()
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.size() - 1)
  }
}
