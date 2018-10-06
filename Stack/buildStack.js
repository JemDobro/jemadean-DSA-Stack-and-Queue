'use strict';

const _Node = require ('./buildNode');
// const node = new _Node();  don't need this

class Stack {  //stores elements in LIFO (last in, first out) order, like stack of plates
  constructor() {
    this.top = null;  //empty first node is the top of the stack
  }

  //2 Primary functions: push() to place data on the top of stack, and pop() to remove data from the top of the stack
  push(data) {
    if (this.top === null) {  //if stack is empty, the data will be theo top of the stack
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top); //otherwise, create node, set ptr to equal this.top
    this.top = node; //makes the item at the top of the stack the new node
  }  //Since we are only adding to the top of the stack, runtime of inserting is constant O(1)

  pop(data) {
    const node = this.top; //sets node = to the top of the stack
    this.top = node.next;  //change pointer so the next item becomes the top of the stack
    return node.data; //return the data of the popped node
  }  //Since we are removing  only from the top of the stack, runtime of removing an item is constant O(1)
}

//We will be using a singly linked list to implement a stack (JS built in array methods can be used to do same thing but we won't use)

module.exports = Stack;