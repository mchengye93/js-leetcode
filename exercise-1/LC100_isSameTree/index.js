/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the 
nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

//Runtime: O(P+Q) P and Q are nodes on input trees. If recursive call count as space then O(p+q)
function isSameTree(p, q) {
    let sameTree = true;

    function checkSameNode(p,q) {
        if(!p && !q) {
            return;
        } else if (!p || !q) {
            sameTree = false;
            return;
        } else if (p.val !== q.val) {
            sameTree = false;
            return;
        }
        checkSameNode(p.left,q.left);
        checkSameNode(p.right,q.right);
    }
    checkSameNode(p,q);

    return sameTree;

}

module.exports = isSameTree;
