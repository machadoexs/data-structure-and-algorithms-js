import { defaultToString } from '../util';
import { ValuePair } from '../models/value_pair';

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if(key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true;
    }
    return false;
  }

  remove(key) {
    if(this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  // Menos processamento pois acessa a tale apenas 1x
  get(key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  // Mais processamento pois acessa a table 2x
  // get(key) {
  //   if(this.hasKey(key)) {
  //     return this.table[this.toStrFn(key)]
  //   }
  //   return undefined
  // }

  keyValues() {
    return Object.values(this.table)
  }

  keys() {
    return this.keyValues().map(valuePair => valuePair.key)
  }

  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }

  clear() {
    return this.table = {};
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0
  }

  toString() {
    if(this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 0; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`
    }
    return objString;
  }
  forEach(callBackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callBackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }
}
