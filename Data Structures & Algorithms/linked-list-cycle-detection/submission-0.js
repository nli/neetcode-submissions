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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) return false
        let slow = head, fast = head.next
        while (slow?.next && fast?.next?.next) {
            if (slow === fast) return true
            slow = slow.next
            fast = fast.next.next
        }
        return false
    }
}


/**
 * 
 * curr1 = head
 * curr2 = head.next
 * 
 * 1 -> 2 -> 3 -> 4
 *           a
 *           b
 */