/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const stack = [], ret = [];
  root && stack.push(root);
  while (stack.length) {
    const item = stack.pop();
    if (item.left) {
      stack.push(item);
      stack.push(item.left);
      item.left = null;
    }
    else {
      ret.push(item.val);
      item.right && stack.push(item.right);
    }
    console.log(stack,ret)
  }
  return ret;
};