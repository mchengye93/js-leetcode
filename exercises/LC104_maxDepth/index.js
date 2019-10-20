
//Runtime: O(N) go through all nodes and O(n) if recursive call count as space;
function maxDepth(root) {
    if (root === null) return 0;
    return Math.max(maxDepth(root.left)+1, maxDepth(root.right)+1);
}

module.exports = maxDepth;
