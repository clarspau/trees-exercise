/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root)
      return 0;

    // call the helper function to find the minimum depth
    function findMinDepth(node) {
      // if the node is null, return 0
      if (node === null)
        return 0;

      // if the node is a leaf, return 1
      if (node.left === null && node.right === null)
        return 1;

      // if the node has no left child, return the minimum depth of the right child + 1
      if (!node.left)
        return findMinDepth(node.right) + 1;

      // if the node has no right child, return the minimum depth of the left child + 1
      if (!node.right)
        return findMinDepth(node.left) + 1;

      return (Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1);
    }
    return findMinDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root)
      return 0;

    // call the helper function to find the maximum depth
    function findMaxDepth() {
      // if the node is null, return 0
      if (node === null)
        return 0;

      // if the node is a leaf, return 1
      if (node.left === null && node.right === null)
        return 1;

      // if the node has no left child, return the maximum depth of the right child + 1
      if (node.left === null)
        return findMaxDepth(node.right) + 1;

      // if the node has no right child, return the maximum depth of the left child + 1
      if (node.right === null)
        return findMaxDepth(node.left) + 1;

      return (Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + 1);
    }
    return fincMaxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    // call the helper function to find the maximum sum
    function findMaxSum(node) {
      if (node === null)
        return 0;

      // find the maximum sum of the left and right subtrees
      const leftSum = findMaxSum(node.left);
      const rightSum = findMaxSum(node.right);

      // update the result with the maximum sum
      result = Math.max(result, node.val + leftSum + rightSum);

      // return the maximum sum of the current node
      return Math.max(0, node.val + leftSum, node.val + rightSum);
    }
    findMaxSum(this.root);

    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root)
      return null;

    // call the helper function to find the next larger value
    function findNextLarger(node) {
      if (node === null)
        return null;

      // if the current node value is less than or equal to the lower bound, search the right subtree
      if (node.val <= lowerBound)
        return findNextLarger(node.right);

      // if the current node value is greater than the lower bound, search the left subtree
      const left = findNextLarger(node.left);
      return (left !== null) ? left : node.val;
    }
    return findNextLarger(this.root);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
