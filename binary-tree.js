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
    if (node1 === this.root || node2 === this.root)
      return false;

    // call the helper function to find the level and parent of the nodes
    function findLevelAndParent(
      nodeToFind,
      currentNode,
      level = 0,
      data = { level: 0, parent: null }
    ) {
      // if the parent is found, return the data
      if (data.parent) return data;

      // if the current node is the node to find, update the data and return it
      if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = currentNode;
      }

      // if the current node is not the node to find, search the left and right subtrees
      if (currentNode.left) {
        findLevelAndParent(nodeToFind, currentNode.left, level + 1, data);
      }

      // if the current node is not the node to find, search the right subtree
      if (currentNode.right) {
        findLevelAndParent(nodeToFind, currentNode.right, level + 1, data);
      }
      return data;
    }

    // call the helper function to find the level and parent of the nodes
    let node1Info = findLevelAndParent(node1, this.root);
    let node2Info = findLevelAndParent(node2, this.root);

    let sameLevel =
      node1Info && node2Info && node1Info.level === node2Info.level;
    let differentParents =
      node1Info && node2Info && node1Info.parent !== node2Info.parent;

    return sameLevel && differentParents;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    // create an array to store the values of the nodes
    const values = [];

    // call the helper function to traverse the tree and store the values
    function traverse(node) {
      // if the node is not null, store the value and traverse the left and right subtrees
      if (node) {
        values.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }

      // if the node is null, store a placeholder
      else {
        values.push("#");
      }
    }

    // call the helper function to traverse the tree
    traverse(tree.root);

    return values.join(" ");
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    // if the string tree is empty, return null
    if (!stringTree) return null;

    // split the string tree into an array of values
    const values = stringTree.split(" ");

    // call the helper function to build the tree
    function buildTree() {
      // building a tree starting from the beginning of the array
      if (values.length) {
        const currentVal = values.shift();

        // if the current value is a placeholder, return null
        if (currentVal === "#") return null;

        // remember to convert values back into numbers
        let currentNode = new BinaryTreeNode(+currentVal);
        currentNode.left = buildTree();
        currentNode.right = buildTree();

        return currentNode;
      }
    }

    const root = buildTree();
    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, currentNode = this.root) {
    // base case 1: empty tree
    if (currentNode === null) return null;

    // base case 2: root is one of the target nodes
    if (currentNode === node1 || currentNode === node2) return currentNode;

    // recursively search the left sub-tree
    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);

    // recursively search the right sub-tree
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    // if neither left nor right is null, currentNode is the ancestor
    if (left !== null && right !== null) return currentNode;

    // if one node is not null, return it
    if (left !== null || right !== null) return left || right;

    // left and right are both null, return null
    if (left === null && right === null) return null;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
