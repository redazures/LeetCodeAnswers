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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(root===null) return false
    let current = root
    while(current){
        if(val<current.val){
            current=current.left
        }else if (val>current.val){
            current=current.right
        }else{
            return current
        }
    }
    return null
};