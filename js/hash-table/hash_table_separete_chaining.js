import { defaultToString } from "../util";
import LinkedList from "../linked-list/linked_list.js";
import { ValuePair } from "../models/value_pair.js";

class HashTableSepareteChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  loseloseHashCode(key) {
    if(typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  put(key, value) {
    if(key != null && value != null) {
      const position = this.hashCode(key)
      if(this.table[position] == null) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value))
      return true
    }
    return false
  }

  get(key){
    const position = this.hashCode(key)
    const linked_list = this.table[position]
    if(linked_list != null && !linked_list.isEmpty()) {
      let current = linked_list.getHead()
      while(current != null) {
        if(current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key)
    const linked_list = this.table[position]
    if(linked_list != null && !linked_list.isEmpty()) {
      let current = linked_list.getHead()
      while(current != null) {
        if(current.element.key === key) {
          linked_list.remove(current.element)
          if(linked_list.isEmpty()) {
            delete this.table[position]
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }
}
