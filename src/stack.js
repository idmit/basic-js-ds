const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
	constructor() {
		this.arr = [];
	}

  push(element) {
    this.arr.push(element);
    // remove line with error and write your code here
  }

  pop() {
    return this.arr.pop()
    // remove line with error and write your code here
  }

  peek() {
		return this.arr[this.arr.length - 1];
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
