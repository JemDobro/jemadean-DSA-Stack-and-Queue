'use strict';

const _Node = require ('/.buildNode');
// const node = new _Node();  don't need this

class Queue { //models a FIFO (first in first out) operation, like a line to buy ice cream at ice cream parlor
  constructor() { 
    this.first = null;  //beginning of queue, currently empty
    this.last =  null;  //end of queue, currently empty
  }

  //Main operations: insertion: enqueue(data) adds data to a queue(can only add to the end), deletion: dequeue() removes the oldest added data to a queue(this is at the beginning of the queue--can only remove from the beginning)
  enqueue(data) {
    const node = new _Node(data); //create a new node with data you want added to the queue

    if (this.first === null) {
      this.first = node;  //if queue empty, make this node the first on on the queue
    }

    if (this.last) {  //if there is something on the queue already, then 
      node.next = this.last;  //set the next pointer of new node to this.last
      this.last.prev = node;  //set the previous pointer of the old last item to point to our new node
    }
    this.last = node; //makes the last item on queue our new node
  } //runtime is constant O(1)--adding items at only one place

  dequeue(){
    if (this.first === null) { //if queue is empty, there is nothing to remove or return
      return;
    }
    const node = this.first; //set node = the first node
    this.first = node.prev;  //make the 2nd item now the first item, so original first item no longer included in queue
    if (node === this.last) {  //if there is only 1 item, set this.last to null, so now empty
      this.last = null;
    }
    return node.value;  //return the value removed
  } //runtime is constant O(1)--removing items at only one place
}

//We will be using a doubly linked list to implement a queue (JS built in array methods can be used to do same thing but we won't use)

module.exports = Queue;