/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/
function isValidBST(root) {
    let validity = true;
    let valid = (node, min,max) => {
        if(!node) return;
        if (min !== null && node.val <= min || max !==null && node.val >= max) {
            validity = false;
            return;
        }

        valid(node.left, min, node.val);
        valid(node.right, node.val, max);
    }
    valid(root, null, null);
    return validity;
}

module.exports = isValidBST;
