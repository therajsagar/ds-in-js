class Node {
  constructor(data, left = null, right = null) {
    this.value = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

BinarySearchTree.prototype.insert = function(data) {
  const node = new Node(data);

  let root = this.root;
  if (!root) {
    this.root = node;
    return;
  }

  const search = current => {
    if (data < current.value) {
      if (!current.left) {
        current.left = node;
        return;
      } else {
        return search(current.left);
      }
    } else if (data > current.value) {
      if (!current.right) {
        current.right = node;
        return;
      } else {
        return search(current.right);
      }
    } else {
      return null;
    }
  };
  return search(root);
};

BinarySearchTree.prototype.remove = function(data) {
  const deleteNode = (current, data) => {
    if (!current) {
      return null;
    }
    if (data === current.value) {
      if (!current.left && !current.right) {
        return null;
      }
      if (!current.left) {
        return current.right;
      }
      if (!current.right) {
        return current.left;
      }
      let tempNode = current.right;
      while (tempNode.left) {
        tempNode = tempNode.left;
      }
      current.value = tempNode.value;
      current.right = deleteNode(current.right, tempNode.value);
      return current;
    } else if (data < current.value) {
      current.left = deleteNode(current.left, data);
      return current;
    } else {
      current.right = deleteNode(current.right, data);
      return current;
    }
  };
  this.root = deleteNode(this.root, data);
};

BinarySearchTree.prototype.getMinNode = function() {
  let root = this.root;
  if (!root) {
    console.log('Empty Tree');
    return;
  }
  let current = root;
  while (current.left) {
    current = current.left;
  }
  console.log(current.value);
};

BinarySearchTree.prototype.getMaxNode = function() {
  let root = this.root;
  if (!root) {
    console.log('Empty Tree');
    return;
  }
  let current = root;
  while (current.right) {
    current = current.right;
  }
  console.log(current.value);
};

BinarySearchTree.prototype.getRootNode = function() {
  let root = this.root;
  return root ? root.value : 'Empty Tree';
};

BinarySearchTree.prototype.contains = function(data) {
  let root = this.root;
  if (!root) {
    return 'Empty Tree';
  }
  let current = root;
  while (current) {
    if (data === current.value) {
      return true;
    } else if (data < current.value) {
      if (!current.left) {
        return false;
      } else {
        current = current.left;
      }
    } else {
      if (!current.right) {
        return false;
      } else {
        current = current.right;
      }
    }
  }
};

BinarySearchTree.prototype.inorder = function() {
  let root = this.root;
  if (!root) {
    return 'Empty Tree';
  }
  let output = [];
  const traverse = node => {
    node.left && traverse(node.left);
    output.push(node.value);
    node.right && traverse(node.right);
  };
  traverse(root);
  return output;
};

BinarySearchTree.prototype.preorder = function() {
  let root = this.root;
  if (!root) {
    return 'Empty Tree';
  }
  let output = [];
  const traverse = node => {
    output.push(node.value);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(root);
  return output;
};

BinarySearchTree.prototype.postorder = function() {
  let root = this.root;
  if (!root) {
    return 'Empty Tree';
  }
  let output = [];
  const traverse = node => {
    node.left && traverse(node.left);
    node.right && traverse(node.right);
    output.push(node.value);
  };
  traverse(root);
  return output;
};

BinarySearchTree.prototype.BFS = function() {
  let root = this.root;
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current);
    current.left && queue.push(current.left);
    current.right && queue.push(current.right);
  }
  return result;
};

BinarySearchTree.prototype.search = function(data) {
  let isFound = false;
  let curr = this.root;

  if(!curr) return false;

  while(curr && !isFound){
    if(data < curr.value) current = current.left;
    else if(data > curr.value) current = current.right;
    else isFound = true
  }
  
  if (!isFound) return 'Not Found';
  return curr;
};
