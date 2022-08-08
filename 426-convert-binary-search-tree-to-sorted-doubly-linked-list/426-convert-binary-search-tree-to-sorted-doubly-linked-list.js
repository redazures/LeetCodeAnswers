/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    let head, tail
    
    const convertNode = (node) => {
        if(!node)return
        convertNode(node.left)
        if(!head) head = node
        if(tail){
            tail.right = node
        }
        node.left = tail
        tail = node
        convertNode(node.right)
    }
    convertNode(root)
    if(head){
        head.left = tail
        tail.right = head
    }
    return head
};