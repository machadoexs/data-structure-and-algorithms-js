import { defaultCompare } from '../util.js';
import { BinarySearchTree } from './binary_search_tree.js'
import { RedBlackNode, Colors } from './red-black-node.js';

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  insert(key) {
    if(this.root == null) {
      this.root = new RedBlackTree(key)
      this.root.color = Colors.BLACK
    } else {
      const newNode = this.insertNode(this.root, key)
      this.fixTreeProperties(newNode)
    }
  }

  insertNode(node, key) {
    if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key)
        node.left.parent = node
        return node.left
      }
      else {
        return this.insertNode(node.left, key)
      }
    }
    else if (node.right == null) {
      node.right = new RedBlackNode(key)
      node.right.parent = node
      return node.right
    }
    else {
      return this.insertNode(node.right, key)
    }
  }
}
