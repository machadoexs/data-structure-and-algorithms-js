import { ValuePair } from "../models/value_pair.js";
import { defaultToString } from "../util.js";

class HashTable {
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
      const position =  this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if(valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }
}

const hash = new HashTable()
hash.put('Gandalf', 'gandalf@mail.com')
hash.put('Frodo', 'frodo@mail.com')
hash.put('Gimli', 'gimli@mail.com')

console.log(hash.hashCode('Gandalf') + ' - Gandalf')
console.log(hash.hashCode('Frodo') + ' - Frodo')
console.log(hash.hashCode('Gimli') + ' - Gimli')

console.log(hash.get('Gandalf'))
console.log(hash.get('Undefined'))

hash.remove('Gandalf')
console.log(hash.get('Gandalf'))

