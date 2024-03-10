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

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
