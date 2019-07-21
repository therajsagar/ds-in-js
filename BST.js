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
  let current = root;
  while (current) {
    if (data < root.value) {
      if (!current.left) {
        current.left = node;
        return;
      } else {
        current = current.left;
      }
    } else {
      if (!current.right) {
        current.right = node;
        return;
      } else {
        current = current.right;
      }
    }
  }
};

// BinarySearchTree.prototype.remove = function(data) {};

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

BinarySearchTree.prototype.inorder = function(root = this.root) {
  if (!root) {
    return 'Empty Tree';
  }
  root.left && this.inorder(root.left);
  console.log(root.value);
  root.right && this.inorder(root.right);
};

BinarySearchTree.prototype.preorder = function(root = this.root) {
  if (!root) {
    return 'Empty Tree';
  }
  console.log(root.value);
  root.left && this.preorder(root.left);
  root.right && this.preorder(root.right);
};

BinarySearchTree.prototype.postorder = function(root = this.root) {
  if (!root) {
    return 'Empty Tree';
  }
  root.left && this.postorder(root.left);
  root.right && this.postorder(root.right);
  console.log(root.value);
};
