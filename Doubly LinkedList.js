class Node {
  constructor(value, previous = null, next = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.traverse = function() {
  let current = this.head;
  let result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  console.log([...result, 'null'].join('->'));
};

DoublyLinkedList.prototype.traverseReverse = function() {
  let current = this.tail;
  let result = [];
  while (current) {
    result.push(current.value);
    current = current.previous;
  }
  console.log(['null', ...result].join('<-'));
};

DoublyLinkedList.prototype.search = function(value) {
  let current = this.head;
  while (current) {
    if (current.value === value) {
      console.log('Found');
      return;
    }
    current = current.next;
  }
  console.log('Not Found');
};

DoublyLinkedList.prototype.append = function(value) {
  value = new Node(value);
  if (!this.head) {
    this.head = value;
    this.tail = value;
    return;
  }
  value.previous = this.tail;
  this.tail.next = value;
  this.tail = value;
};

DoublyLinkedList.prototype.addAtPosition = function(position, value) {
  let currentPosition = 1;
  value = new Node(value);
  let current = this.head;
  if (position === currentPosition) {
    value.next = current;
    if (current) {
      current.previous = value;
    } else {
      this.tail = value;
    }
    this.head = value;
    return;
  }
  while (current) {
    if (currentPosition + 1 === position) {
      value.next = current.next;
      value.previous = current;
      if (!current.next) {
        this.tail = value;
      } else {
        current.next.previous = value;
      }
      current.next = value;
      return;
    }
    current = current.next;
    currentPosition++;
  }
  console.log('Location out of range');
};

DoublyLinkedList.prototype.addAtPosition = function(position, value) {
  let currentPosition = 1;
  value = new Node(value);
  let current = this.head;
  if (position === currentPosition) {
    value.next = current;
    if (current) {
      current.previous = value;
    } else {
      this.tail = value;
    }
    this.head = value;
    return;
  }
  while (current) {
    if (currentPosition + 1 === position) {
      value.next = current.next;
      value.previous = current;
      if (!current.next) {
        this.tail = value;
      } else {
        current.next.previous = value;
      }
      current.next = value;
      return;
    }
    current = current.next;
    currentPosition++;
  }
  console.log('Location out of range');
};

DoublyLinkedList.prototype.remove = function(value) {
  let current = this.head;
  while (current) {
    if (current.value === value) {
      if (current.previous) {
        current.previous.next = current.next;
      } else {
        this.head = current.next;
      }
      if (current.next) {
        current.next.previous = current.previous;
      } else {
        this.tail = current.previous;
      }
      return;
    }
    current = current.next;
  }
  console.log('Element not found.');
};
