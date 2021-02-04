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
var goodNodes = function(root) {
    if(!root) return null
    const queue = [[root,root.val]]
    let good = 0
    while(queue.length){
        let [node, max] = queue.pop()
        // console.log(node,max)
        if(node.val>=max){
            good++
            max = node.val
        }
        if(node.left)queue.push([node.left,max])
        if(node.right)queue.push([node.right,max])
    }
    return good
};