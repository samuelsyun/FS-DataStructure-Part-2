'use strict'

class Node {
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    let oldTail = this.tail;
    let newNode = new Node(value, oldTail);

    if (oldTail) {
      oldTail.next = newNode;
      newNode.previous = oldTail;
    } else this.head = newNode;

    this.tail = newNode;
  }

  removeTail() {
    let removedTail = this.tail;

    if (!removedTail) return;

    if (removedTail.previous) {
      this.tail = removedTail.previous;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return removedTail.value;
  }

  addToHead(value) {
    let oldHead = this.head;
    let newNode = new Node(value, null, oldHead);

    if (oldHead) {
      oldHead.previous = newNode;
      newNode.next = oldHead;
    } else this.tail = newNode;

    this.head = newNode;
  }

  removeHead() {
    let removedHead = this.head;

    if (!removedHead) return;

    if (removedHead.next) {
      this.head = removedHead.next;
      this.head.previous = null
    } else {
      this.tail = null;
      this.head = null;
    };

    return removedHead.value;
  }

  search(searchingItem) {
    let corrected = isFunc(searchingItem) ? searchingItem :
      function (value) { return searchingItem === value; };

    let currentNode = this.head

    while (currentNode) {
      if (corrected(currentNode.value)) return currentNode.value;
      currentNode = currentNode.next;
    }

    return null;
  }

  size () {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }

    return counter;
  }
}

let isFunc = value => typeof value === 'function';
