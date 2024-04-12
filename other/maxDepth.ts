class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  let max = 0;

  const nodeDepth = function (node, depth) {
    if (!node) {
      max = Math.max(max, depth - 1);
      return;
    }

    nodeDepth(node.left, depth + 1);
    nodeDepth(node.right, depth + 1);
  };

  nodeDepth(root, 1);

  return max;
}

const tree1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log("Test 1", maxDepth(tree1));

const tree2 = new TreeNode(1, new TreeNode(2));
console.log("Test 2", maxDepth(tree2));
