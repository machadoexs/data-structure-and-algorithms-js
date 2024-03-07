import { MinHeap } from "./min_heap.js";
import { defaultCompare, reverseCompare} from '../util.js';

export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}
