import { Compare, defaultCompare } from '../util.js'

export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  insert(value) {
    if (value != null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
  }

  siftUp(index) {
    let parent = this.getParentIndex(index)
    while(index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  swap(array, a, b) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

  findMinimum() {
    return this.isEmpty ? undefined : this.heap[0]
  }

  extract() {
    if (this.isEmpty) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift
    }
    const removedValue = this.heap.shift
    this.siftDown(0)
    return removedValue
  }

  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()

    if(left < size && this.compareFn(this.heap[element], this.heap(left))  > Compare.BIGGER_THAN) {
      element = left
    }
    if(right < size && this.compareFn(this.heap[element], this.heap(right))  > Compare.BIGGER_THAN) {
      element = right
    }
    if(index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}

const heap = new MinHeap()
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(1)
console.log(heap)
