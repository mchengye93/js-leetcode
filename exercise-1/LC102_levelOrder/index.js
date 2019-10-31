
//Time complexity: O(N) traverse through each node , space complexity: O(N)
function levelOrder(root) {
    if(root === null) return [];
  let stack = [];
  let result = [];
  stack.push(root);

  while(stack.length > 0) {

    let temp = [];
    let size = stack.length;

    for (let i = 0 ; i < size; i++) {
      let node = stack.shift();
      temp.push(node.val);

      if(node.left) stack.push(node.left);
      if(node.right)stack.push(node.right);
    }
    result.push(temp);

  }
  return result;
}

module.exports = levelOrder;
