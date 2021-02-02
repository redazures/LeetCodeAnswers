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
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return l1
    if(!l1) return l2
    if(!l2) return l1
       
    
      var c1 = l1,
      c2=l2, start
      if (!start){
          if(c1.val<=c2.val){
              start=c1
              c1 = c1.next
          } else{
              start=c2
              c2=c2.next
          }
      }

        let end = start

      while(c1 && c2){
        if(c1.val<=c2.val){
              end.next=c1
              c1 = c1.next
          } else{
              end.next=c2
              c2=c2.next
          }
          end=end.next
      }

        if(c1 || c2) end.next = c1 || c2

        return start
};