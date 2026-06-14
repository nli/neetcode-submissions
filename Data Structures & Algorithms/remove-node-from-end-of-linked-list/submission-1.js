/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (head.next === null) {
            head = null
            return head;
        }
        let curr = head
        let c = 0
        while (curr) {
            c++
            curr = curr.next
        }

        const iterate = c-n

        curr = head
        let prev = new ListNode()
        const res = prev
        prev.next = head
        let count = 0
        console.log(iterate)
        while (prev) {
            if (iterate === count) {
                prev.next = prev.next.next;
                break;
            }
            count++
            prev=prev.next
        }
        return res.next;
    }
}


/**
 * 
 * 
 * 
 * 
 * h,1,2,3,4
 *     ^  
 * c = 1
 * 
 * iterate 4-2
 * 
 * 
 */