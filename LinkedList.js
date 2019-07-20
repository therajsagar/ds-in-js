class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.traverse = function() {
  let current = this.head;
  let result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  console.log([...result, 'null'].join('->'));
};

LinkedList.prototype.search = function(v) {
  let current = this.head;
  while (current) {
    if (current.value === v) {
      console.log('Found');
      return;
    }
    current = current.next;
  }
  console.log('Not Found');
};

LinkedList.prototype.addToBeginning = function(value) {
  value = new Node(value);
  if (this.head) {
    value.next = this.head;
  }
  this.head = value;
};

LinkedList.prototype.addToEnd = function(value) {
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

LinkedList.prototype.addAtPosition = function(position, value) {
  let currentPosition = 1;
  value = new Node(value);
  if (position === 1) {
    if (this.head) {
      value.next = this.head;
    }
    this.head = value;
    return;
  }
  let current = this.head;
  while (current.next && currentPosition + 1 < position) {
    current = current.next;
    currentPosition++;
  }
  if (position !== currentPosition + 1) {
    console.log('Location out of range');
    return;
  }
  value.next = current.next;
  current.next = value;
};

LinkedList.prototype.removeFromPosition = function(position) {
  if (position === 1) {
    if (!this.head) {
      console.log('Underflow');
      return;
    }
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  let currentPosition = 1;
  while (current.next && currentPosition + 1 < position) {
    current = current.next;
    currentPosition++;
  }
  if (position !== currentPosition + 1 || !current.next) {
    console.log('Location out of range');
    return;
  }
  current.next = current.next.next;
};
