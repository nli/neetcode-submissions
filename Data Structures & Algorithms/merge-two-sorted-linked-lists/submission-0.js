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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head = new ListNode();
        let curr = head
        while (list1 || list2) {
            if (!list2 || (list1 && list1.val < list2.val) ) {
                let tmp = list1.next
                curr.next = list1;
                list1.next = null
                list1=tmp;
            } else {
                let tmp = list2.next
                curr.next = list2
                list2.next = null;
                list2 = tmp
            }
            curr = curr.next;
        }
        return head.next;
    }
}

/**
 * 
 * curr = head
 * 
 * 
 *  * empty -> 1 -> 1 -> null
 * 
 * 
 * 1,2,3
 *   ^
 * 1,3,5
 *   ^
 * 
 * 
 * tmp = 2
 * set 
 * 
 * 
 * list1 = 1
 * list2 = 3
 */


