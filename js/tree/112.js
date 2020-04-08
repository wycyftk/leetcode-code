function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {

  function dps(node, tempSum) {
    if (!node) return false;

    var s = node.val + tempSum;

    console.log(s);

    if (node.left || node.right) {
      return dps(node.left, s) || dps(node.right, s);
    } 

    return s === sum;
  }

  return dps(root, 0);
};

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n3.left = n5;

console.log(hasPathSum(n1, 4));
