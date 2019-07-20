class Queue {
  constructor(size) {
    this.values = [];
    this.size = size;
    console.log(`Max Size = ${size}`);
  }
}

Queue.prototype.isFull = function() {
  return this.values.length === this.size;
};

Queue.prototype.isEmpty = function() {
  return this.values.length === 0;
};

Queue.prototype.peek = function() {
  console.log(this.values[0] || 'Queue is Empty');
};

Queue.prototype.enqueue = function(value) {
  if (!this.isFull()) {
    this.values.push(value);
    console.log('Enqueued successfully.');
  } else {
    console.log('Overflow.');
  }
};

Queue.prototype.dequeue = function() {
  if (!this.isEmpty()) {
    this.values.shift();
    console.log('Dequeued successfully.');
  } else {
    console.log('Undeflow.');
  }
};

Queue.prototype.traverse = function() {
  if (this.isEmpty()) {
    console.log('Empty Queue');
    return;
  }
  const result = [];
  for (let i = 0; i < this.values.length; i++) {
    result.push(this.values[i]);
  }
  console.log(result.join('|'));
};
