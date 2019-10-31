/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

/* Time: O(N) Space: O(1)
*/
function removeNthFromEnd(head, n) {
    let dummyHead  = {next:head};
    let slow = dummyHead;
    let fast = dummyHead;

    for (let i = 0 ; i < n; i++) {
        fast = fast.next;
    }

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummyHead.next;
}

module.exports = removeNthFromEnd;
