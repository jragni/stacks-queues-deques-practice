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
    if (this.first === null || this.last === null) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.first === null) throw new Error("Queue is empty.");
    else {
      const val = this.first.val;
      this.first = this.first.next;
      this.size--;
      return val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.head === null) return;
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }

  /** print(): prints out the values of the queue */
  print() {
    if (this.head === null) console.log("Queue is empty");
    let current = this.first;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

module.exports = Queue;
