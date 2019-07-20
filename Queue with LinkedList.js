class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }
}

Queue.prototype.traverse = function() {
  let current = this.head;
  let result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  console.log([...result, 'null'].join('->'));
};

Queue.prototype.enqueue = function(value) {
  value = new Node(value);
  if (!this.head) {
    this.head = value;
    return;
  }
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = value;
};

Queue.prototype.dequeue = function() {
  if (!this.head) {
    console.log('Underflow');
    return;
  }
  this.head = this.head.next;
};

Queue.prototype.peek = function() {
  if (!this.head) {
    console.log('Queue Empty.');
    return;
  }
  console.log(this.head.value);
};
