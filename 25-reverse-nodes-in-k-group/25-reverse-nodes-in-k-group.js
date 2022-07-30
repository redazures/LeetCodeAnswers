/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    
    let resultNode = null;
    
    const reverse = (head, k) => {
        let prev=null, temp, count=0, last=head
        while(head && count<k){
            temp = head
            head = head.next
            temp.next = prev
            prev = temp
            count++
        }
        
        if(count<k){
            return [prev, false, false]
        }
        return [prev, head, last]
    }
    
    let prevJoint
    while(head){
        const [result, resi, joint] = reverse(head, k)
        if(!resi && !joint){
            const [reverted] = reverse(result, k) 
            prevJoint.next = reverted
            return resultNode
        }
        if(resultNode && prevJoint){
            prevJoint.next = result
        }
        if(!resultNode){
            resultNode = result
        }
        prevJoint = joint
        head = resi
    }
    return resultNode
};