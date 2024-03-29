class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }
}

Stack.prototype.traverse = function() {
  let current = this.head;
  let result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  console.log([...result].reverse().join('<-'));
};

Stack.prototype.push = function(value) {
  value = new Node(value);
  let current = this.head;
  if (!current) {
    this.head = value;
    return;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = value;
};

Stack.prototype.pop = function() {
  let current = this.head;
  if (!current) {
    console.log('Underflow');
    return;
  }
  while (current.next) {
    if (!current.next.next) {
      current.next = null;
      return;
    }
    current = current.next;
  }
  this.head = null;
};

Stack.prototype.peek = function() {
  if (!this.head) {
    console.log('Stack Empty.');
    return;
  }
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  console.log(current.value);
};
