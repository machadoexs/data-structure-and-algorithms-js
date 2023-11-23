import { defaultEquals, defaultCompare, Compare } from "../util.js";
import LinkedList from "../linked-list/linked_list.js";

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  insert(element, index = 0) {
    if(this.isEmpty()) {
      return super.insert(element, index === 0 ? index : 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }

  getIndexNextSortedElement(element) {
    let current = this.head
    for (let i = 0; i < this.size(); i++) {
      const comp = this.compareFn(element, current.element)
      if(comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next
    }
    return 0;
  }
}
