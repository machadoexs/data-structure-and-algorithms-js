import { defaultEquals } from "../util.js";
import { DoublyNode } from "../models/linked_list_models.js";
import LinkedList from "../linked-list/linked_list.js";

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined;
  }

  insert(element, index) {
    if (this.validIndex(index)) {
      const node = new DoublyNode(element)
      let current = this.head
      if (this.firstIndex(index)) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
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
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.element
    }
    return undefined
  }
}
const dblist = new DoublyLinkedList()
dblist.push(10)
dblist.push(11)
dblist.push(12)
console.log(dblist.toString())
dblist.insert(9, 0)
console.log(dblist.toString())
dblist.insert(11.5, 3)
console.log(dblist.toString())
