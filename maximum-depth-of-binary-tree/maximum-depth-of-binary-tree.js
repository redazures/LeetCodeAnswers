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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    let count=0
    let maxCount =0
    let queue =[[root,count]]
    while(queue.length){
        let [node,count] = queue.pop()
        count++
        maxCount=Math.max(maxCount,count)
        if(node.left)queue.push([node.left,count])
        if(node.right)queue.push([node.right,count])
    }
    return maxCount
};