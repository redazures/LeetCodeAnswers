/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
    
    let first = l1
    let second = l2
    let plus = 0
    while(first || second){
        first.val  = first.val + (second ? second.val : 0) + plus
        // console.log(first.val, second?.val, plus)
        plus = 0
        if(first.val>9){
            first.val = first.val - 10
            plus = 1
        }
        if(second?.next && !first.next || !first.next && plus){
            const newNode = new ListNode(0,null)
            first.next = newNode
        }
        first = first.next
        second = second?.next
    }
    
    return l1
};