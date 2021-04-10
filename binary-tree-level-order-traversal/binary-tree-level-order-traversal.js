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
    if(!root)return []
    let quene = [root], node, answer=[[root.val]], currentLevel, nextLevel
    while(quene.length){
        currentLevel=[]
        nextLevel=[]
        while(quene.length){
            node = quene.shift()
            node.left && currentLevel.push(node.left.val) && nextLevel.push(node.left)
            node.right && currentLevel.push(node.right.val) && nextLevel.push(node.right)
        }
        quene = nextLevel
        if(currentLevel.length>0)answer.push(currentLevel)
        // console.log(answer,nextLevel)
    }
    return answer
};