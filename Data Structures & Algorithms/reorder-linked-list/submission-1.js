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
     * @return {void}
     */
    reorderList(head) {
        let slow = head, fast = head
        while (fast?.next?.next) {
            slow = slow.next
            fast = fast.next.next
        }

        // breaing link so we have 2 lists
        let list1 = head;
        let list2 = slow.next
        slow.next = null

        // reversing second list
        let prev=null
        while (list2) {
            let tmp = list2.next
            list2.next = prev
            prev = list2
            list2 = tmp;
        }

        list2 = prev;
        while (list1 && list2) {
            const tmp1 = list1.next
            const tmp2 = list2.next
            list1.next = list2
            list2.next = tmp1
            list1 = tmp1
            list2 = tmp2;
        }

    }
}

/**
 * 
 *  0,1,2,3,4,5,6
 *        s 
 * 
 *              f
 * 0,1,2   3,4,5,6
 * 
 * prev = null
 * tmp = 4
 * 3.next = null
 * 
 * 0,6,1,5,2,4,3
 * 
 */           
