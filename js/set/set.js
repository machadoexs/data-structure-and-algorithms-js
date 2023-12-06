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
    const valuesOfOtherSet = otherSet.values()
    let biggerSet = values
    let smallSet = valuesOfOtherSet

    if(valuesOfOtherSet.length - values.length > 0) {
      biggerSet = valuesOfOtherSet
      smallSet = values
    }

    smallSet.forEach(value => {
      if(biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    });

    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new MySet()
    this.values().forEach(value => {
      if(!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  isSubSetOf(otherSet) {
    if(this.size() > otherSet.size()) {
      return false
    }
    let isSubSet = true
    this.values().every(value => {
      if(!otherSet.has(value)) {
        isSubSet = false
        return false
      }
      return true
    })
    return isSubSet
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

const setE = new MySet()
setE.add(1)
setE.add(2)
setE.add(3)
setE.add(5)
const setF = new MySet()
setF.add(2)
setF.add(3)
setF.add(4)
const differenceAB = setE.difference(setF)
console.log(differenceAB.values())

const setG = new MySet()
setG.add(1)
setG.add(2)
const setH = new MySet()
setH.add(1)
setH.add(2)
setH.add(3)
const setI = new MySet()
setI.add(2)
setI.add(3)
setI.add(4)
console.log(setG.isSubSetOf(setH))
console.log(setG.isSubSetOf(setI))
