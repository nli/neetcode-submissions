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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        let curr = head; // head -> 0
        while (curr) { // 1
            let temp = curr.next // temp = 1
            curr.next = prev // 0.next = null
            prev = curr // prev = 0
            curr = temp // curr = 1
        }
        return prev
    }
}


/**
 * 
 * 
 * null -> 0 -> 1 -> 2 -> 3
 * 
 * null -> 1 -> 0
 * 
 * 
 * 0,1,2,3,4
 * 
 */