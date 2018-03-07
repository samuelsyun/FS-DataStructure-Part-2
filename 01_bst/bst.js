'use strict'

class BinarySearchTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.counter = 1;
  }

  insert (value) {
    let direction = value < this.value ? 'left' : 'right';

    if (this[direction]) this[direction].insert(value);
    else this[direction] = new BinarySearchTree(value);
    this.counter++
  }

  contains (value) {
    if (this.value === value) return true;

    let direction = value < this.value ? 'left' : 'right';

    if (this[direction]) return this[direction].contains(value);
    else return false;
  }

  depthFirstForEach (func, order = 'in-order') {
    if (order === 'pre-order') func(this.value);
    if (this.left) this.left.depthFirstForEach(func, order);
    if (order === 'in-order') func(this.value);
    if (this.right) this.right.depthFirstForEach(func, order);
    if (order === 'post-order') func(this.value);
  }

  breadthFirstForEach (func) {
    let queue = [this];

    while (queue.length) {
      let currentTree = queue.shift();

      if (currentTree.left) queue.push(currentTree.left);
      if (currentTree.right) queue.push(currentTree.right);
      func(currentTree.value);
    }
  }

  size () {
    return this.counter;
  }
}
