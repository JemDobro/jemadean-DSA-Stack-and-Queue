'use strict';

class _Node {   //creates a node containing the data and a reference to the next item
  constructor(value) {
    this.value = value;
    this.next = null;  //ptr to the next item
    this.prev = null;  //ptr to the prev item
  }
}

module.exports = _Node;