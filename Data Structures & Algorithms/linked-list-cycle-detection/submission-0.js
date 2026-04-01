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

        // Initialize two pointers
        let slow = head;
        let fast = head;

        // Traverse the list
        while (fast !== null && fast.next !== null) {

            // Move slow pointer one step
            slow = slow.next;

            // Move fast pointer two steps
            fast = fast.next.next;

            // If they meet, there is a cycle
            if (slow === fast) {
                return true;
            }
        }

        // If we reach the end, there is no cycle
        return false;
    }
}