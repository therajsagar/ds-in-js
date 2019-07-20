class Stack {
  constructor(size) {
    this.values = [];
    this.size = size;
    console.log(`Max Size = ${size}`);
  }
}

Stack.prototype.isFull = function() {
  return this.values.length === this.size;
};

Stack.prototype.isEmpty = function() {
  return this.values.length === 0;
};

Stack.prototype.peek = function() {
  console.log(this.values.slice(-1)[0] || 'Stack is Empty');
};

Stack.prototype.push = function(value) {
  if (!this.isFull()) {
    this.values.push(value);
    console.log('Pushed successfully.');
  } else {
    console.log('Overflow.');
  }
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    this.values.pop();
    console.log('Popped successfully.');
  } else {
    console.log('Undeflow.');
  }
};

Stack.prototype.traverse = function() {
  if (this.isEmpty()) {
    console.log('Empty Stack');
    return;
  }
  for (let i = this.values.length - 1; i >= 0; i--) {
    console.log(this.values[i]);
  }
};
