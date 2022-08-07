/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let curr = head
    while (curr !== null) {
        if(curr.visited) return curr
        curr.visited = true;
        curr = curr.next;
    }
    
    return null
};