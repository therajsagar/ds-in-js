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
        search(current.left);
      }
    } else if (data > current.value) {
      if (!current.right) {
        current.right = node;
        return;
      } else {
        search(current.right);
      }
    }
  };
  search(root);
};

// BinarySearchTree.prototype.remove = function(data, root = this.root) {
//   if (!this.root) {
//     console.log('Empty Tree');
//     return;
//   }
//   let current = root;
//   while (current) {
//     if (data === current.value) {
//       if (!current.left && !current.right) {
//         current = null;
//         return;
//       } else if (!current.left) {
//         current = current.right;
//       } else if (!current.right) {
//         current = current.left;
//       } else {
//         let piv = current.right;
//         while (piv.left) {
//           piv = piv.left;
//         }
//         current = piv;
//         piv = null;
//       }
//     } else if (data < current.value) {
//       if (!current.left) {
//         return 'Element Not Found.';
//       } else {
//         current = current.left;
//       }
//     } else {
//       if (!current.right) {
//         return 'Element Not Found.';
//       } else {
//         current = current.right;
//       }
//     }
//   }
// };

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
