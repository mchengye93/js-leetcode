/*
Merge two sorted linked lists and return it as a new list. The new list should be
 made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/
/* Time: O(N+M) Space = O(1)
*/
function mergeTwoLists(l1, l2) {

    let dummyHead = {next: null};
    let tail = dummyHead;

    while(l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            tail = tail.next;
            l1 = l1.next;
        } else {
            tail.next = l2;
            tail = tail.next;
            l2 = l2.next;
        }
    }

    tail.next = l1 || l2;

    return dummyHead.next;
    
}


module.exports = mergeTwoLists;
