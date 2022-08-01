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
    let res, join;
    const reverse = (head, k) => {
        let count = 0, prev=null, temp, last=false
        while(head && count<k){
            temp = head.next
            head.next = prev
            prev = head
            head = temp
            count++
        }
        if(count<k){
            last = true
        }
        return [prev, head, last]
    }
        
    while(head){
        let [newList, resi, last] = reverse(head, k)
        if(last){
            [newList] = reverse(newList,k)
            join.next = newList
            return res
        }
        if(!res){
            res = newList
        }
        if(join){
            join.next = newList
        }
        join = head
        head = resi
    }
    return res
};