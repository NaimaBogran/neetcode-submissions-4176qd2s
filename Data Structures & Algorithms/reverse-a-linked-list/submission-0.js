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

        // 'prev' will eventually become the new head of the reversed list
        let prev = null;

        // 'curr' starts at the head of the list
        let curr = head;

        // Traverse the linked list
        while (curr !== null) {

            // Save the next node before we change the pointer
            let next = curr.next;

            // Reverse the pointer so the current node points backward
            curr.next = prev;

            // Move prev forward
            prev = curr;

            // Move curr forward
            curr = next;
        }

        // At the end, 'prev' is the new head of the reversed list
        return prev;
    }
}