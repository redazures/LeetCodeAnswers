/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let first = l1
    let second = l2
    let carry = 0 
    
    while(first || second){
        var sum = (first?.val || 0)  + (second ? second.val :0)  + carry
        carry = 0
        // console.log(sum)
        //console.log(first.val, second.val, carry, sum)
        if (sum>9){
            sum=sum-10
            carry=1
        }
        first.val = sum
        var pre = first 
        first = first.next 
        second = second.next || 0
        if(!first && second){
            var extra = new  ListNode(0,null)
            pre.next=extra
            first=pre.next
        }
        console.log(first,second,carry)
    }
    
    if (carry >0) {
        var extra = new  ListNode(1,null)
        console.log(pre, extra)
        pre.next = extra
    }
    return l1
};
