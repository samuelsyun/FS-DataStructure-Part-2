'use strict'

class HashNode {
  constructor (key, val) {
    this.key = key;
    this.value = val;
  }
}

class HashTable {
  constructor (val = 35) {
    this.buckets = new Array(val);
    this.numBuckets = val;
  }

  set (key, val) {
    if (typeof key !== 'string') {
      throw new TypeError('Keys must be strings');
    }

    const hash = this.hash(key);

    this.buckets[hash] = this.buckets[hash] || new LinkedList();

    this.buckets[hash].addToHead(new HashNode(key, val));
  }

  get (key) {
    const hash = this.hash(key);

    return this.buckets[hash].search(node => node.key === key).value;
  }

  hasKey (key) {
    const hash = this.hash(key);

    return Boolean(this.buckets[hash].search(node => node.key === key));
  }

  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
    }
    return sum % this.numBuckets;
  }
}
