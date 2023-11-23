import { defaultEquals } from "../util.js";
import LinkedList from "../linked-list/linked_list.js";

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(element, index) {
    if (this.validIndex(index)) {
      const node = new Node(element)
      let current = this.head
      if (this.firstIndex(index)) {
        if (this.head == null) {
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          current = this.getElementAt(this.size())
          this.head = node
          current.next = this.head
        }
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

  removeAt(index) {
    if (this.validIndex(index)) {
      let current = this.head
      if (this.firstIndex(index)) {
        if(this.size === 1){
          this.head = undefined
        } else {
          const removed = this.head
          current = this.getElementAt(this.size())
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      } else {
        const previous = this.getElementAt(index)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
}
