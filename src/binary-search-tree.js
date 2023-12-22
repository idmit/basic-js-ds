const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor() {
		this.tree = null;
	}

  root() {
    return this.tree;
  }

  add(data) {
		this.tree = addNode(this.tree, data)

		function addNode(node, data) {

			if (!node) return new Node(data);
			if (node.data === data) return node;

			if (data < node.data) {
				node.left = addNode(node.left, data)
			} else {
				node.right = addNode(node.right, data)
			}

			return node;
		}
  }

  has(data) {
    return searchNode(this.tree, data);

		function searchNode(node, data) {
			if (!node) return false

			if (node.data === data) return true;

			return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data);
		}

  }

  find(data) {
    return findNode(this.tree, data) 

		function findNode(node, data) {
			if (!node) return null

			if (node.data === data) return node

			return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
		}

  }

  remove(data) {
    this.tree = removeNode(this.tree, data) 

		function removeNode(node, data) {
			if (!node) return null;

			if (data < node.data) {
				node.left = removeNode(node.left, data)
				return node;
			} else if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null
				}

				if (!node.left) {
					node = node.right;
					return node;
				}

				if (!node.right) {
					node = node.left;
					return node;
				}

				let minNodeFromRight = node.right;

				while(minNodeFromRight.left) {
					minNodeFromRight = minNodeFromRight.left
				}
				node.data = minNodeFromRight.data

				node.right = removeNode(node.right, minNodeFromRight.data);

				return node;
			}
		}
  }

  min() {
		if (!this.tree) return

		let node = this.tree;

		while (node.left) {
			node = node.left
		}

		return node.data

  }

  max() {
    if (!this.tree) return

		let node = this.tree;

		while (node.right) {
			node = node.right
		}

		return node.data

  }
}

module.exports = {
  BinarySearchTree
};