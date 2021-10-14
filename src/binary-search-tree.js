const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.treeroot = null;
  }

  root() {
    return this.treeroot;
  }

  add(data) {
    var newNode = new Node(data);
    if (this.treeroot === null) {
      this.treeroot = newNode;
      return this;
    }
    let current = this.treeroot;
    let isFound = false;
    while (!isFound) {
      if (current.data === data) {
        isFound = true;
        return undefined;
      }
      if (current.data > data) {
        if (!current.left) {
          current.left = newNode;
          isFound = true;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          isFound = true;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  has(data) {
    let current = this.treeroot;

    while (current !== null) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    if (!this.treeroot) {
      return false;
    }
    let current = this.treeroot;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) {
      return null;
    }
    return found;
  }

  remove(data) {
    this.treeroot = this.removeNode(this.treeroot, data);
  }

  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      var minMode = this.minNode(node.right);
      node.data = minMode.data;

      node.right = this.removeNode(node.right, minMode.data);
      return node;
    }
  }

  minNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.minNode(node.left);
  }

  min() {
    if (this.treeroot === null) {
      return null;
    }

    let current = this.treeroot;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (this.treeroot === null) {
      return null;
    }
    let current = this.treeroot;

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
};

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
