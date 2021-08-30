const LinkedList = require("./linked-list");
/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if (first === null || last === null) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      this.last.next = newNode;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {}

  /** peek(): return the value of the first node in the queue. */

  peek() {}

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {}
}

module.exports = Queue;
