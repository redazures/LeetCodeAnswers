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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let resultArray = []

    
     const traverseNode = (node, level = 0) =>{
         if(!node)return
         if(resultArray[level]){
             resultArray[level].push(node.val)
         }
          if(!resultArray[level]){
             resultArray[level] = [node.val]
         }
         traverseNode(node.left, level+1)
         traverseNode(node.right, level+1)
     }
     
    root && traverseNode(root)
    return resultArray
     
};