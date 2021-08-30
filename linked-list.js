/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    // if empty list
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    // if empty list.
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // nothing in list
    if (this.head === null || this.tail === null) return null;
    else if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      this.tail = current;
      let val = this.tail.next.val;
      this.tail.next = null;
      this.length--;
      return val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) return null;
    else if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    } else {
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      return val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.head === null) return -1;
    if (idx >= this.length) return -1;
    let ptr = 0;
    let current = this.head;
    while (ptr !== idx) {
      current = current.next;
      ptr++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length) return;
    if (this.head === null || this.tail === null) return;

    let ptr = 0;
    let current = this.head;
    while (idx !== ptr) {
      current = current.next;
      ptr++;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // insert first
    if (idx === 0) this.unshift(val);
    // insert last
    else if (idx === this.length) this.push(val);
    // insert middle
    else {
      let newNode = new Node(val);
      let ptr = 0;
      let current = this.head;
      while (ptr !== idx - 1) {
        ptr++;
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) this.shift();
    else if (idx === this.length - 1) this.pop();
    else {
      let ptr = 0;
      let current = this.head;
      while (ptr !== idx - 1) {
        ptr++;
        current = current.next;
      }
      this.length--;
      this.current.next = this.current.next.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    if (this.head === null) return 0;

    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }

  /** print(): prints list */
  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
