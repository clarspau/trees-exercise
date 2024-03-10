/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root)
      return 0;

    // start with the value of the root
    let sum = this.root.val;

    function sumNodeValues(node) {
      // go through each child of a node
      for (let child of node.children) {
        // add the value of the child to the sum
        sum += child.val;

        // if the child has children, call the function again
        if (child.children.length > 0) {
          sumNodeValues(child);
        }
      }
    }
    sumNodeValues(this.root);

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root)
      return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvenNodes(node) {
      // go through each child of a node
      for (let child of node.children) {
        // if the value of the child is even, add 1 to the count
        if (child.val % 2 === 0) count++;

        // if the child has children, call the function again
        if (child.children.length > 0) {
          countEvenNodes(child);
        }
      }
    }
    countEvenNodes(this.root);

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
