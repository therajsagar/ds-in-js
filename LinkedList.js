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
  value.next = this.head;
  this.head = value;
};

LinkedList.prototype.addToEnd = function(value) {
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

LinkedList.prototype.addAtPosition = function(position, value) {
  let currentPosition = 1;
  value = new Node(value);
  let current = this.head;

  if (position === currentPosition) {
    value.next = current;
    this.head = value;
    return;
  }
  while (current) {
    if (currentPosition + 1 === position) {
      value.next = current.next;
      current.next = value;
      return;
    }
    current = current.next;
    currentPosition++;
  }
  console.log('Location out of range');
};

LinkedList.prototype.removeFromPosition = function(position) {
  let current = this.head;
  let currentPosition = 1;
  if (position === currentPosition) {
    if (!current) {
      console.log('Underflow');
      return;
    }
    this.head = current.next;
    return;
  }
  while (current.next) {
    if (currentPosition + 1 === position) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
    currentPosition++;
  }
  console.log('Location out of range');
};

LinkedList.prototype.remove = function(value) {
  let current = this.head;
  if (!current) {
    console.log('Underflow');
    return;
  }
  if (current.value === value) {
    this.head = current.next;
    return;
  }
  while (current.next) {
    if (current.next.value === value) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  console.log('Element not found');
};
