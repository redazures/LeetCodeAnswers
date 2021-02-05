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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // if(root.val===0) return true
    let min = Number.MIN_SAFE_INTEGER, max=Infinity,queue= [[root,min,max]]
    while (queue.length){
        let [node, min, max] = queue.pop()
        if(node.val>=max || node.val<=min) return false
        // console.log(node,min,max)
        if(node.left) queue.push([node.left,min,node.val])
        if(node.right) queue.push([node.right,node.val,max])
    }
    return true
};