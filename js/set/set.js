// @ts-check

class MySet {
  constructor() {
    this.items = {}
  }

  add(element) {
    if(!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  delete(element) {
    if(this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  union(otherSet) {
    const unionSet = new MySet()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new MySet()
    const values = this.values()
    for (let i = 0; i < values.length; i++) {
      if(otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }
}

const setA = new MySet()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new MySet()
setB.add(4)
setB.add(5)
setB.add(6)
const unionAB = setA.union(setB)
console.log(unionAB)

const setC = new MySet()
setC.add(1)
setC.add(2)
setC.add(3)
const setD = new MySet()
setD.add(2)
setD.add(3)
setD.add(4)
const intersectionAB = setC.intersection(setD)
console.log(intersectionAB.values())
