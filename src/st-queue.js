const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
}
  
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const qnode = new Node(value);

    if (this.head) { 

      this.tail.next = qnode;
      this.tail = qnode; 
  } else {
    this.tail = qnode;
    this.head = qnode; 
  }

  this.length++; 

  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    let val = current.value;
    return val;
  }
}


class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}