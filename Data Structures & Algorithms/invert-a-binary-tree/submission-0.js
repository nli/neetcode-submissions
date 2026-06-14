/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root
        const run = (node) => {
            if (node.left) run(node.left)
            if (node.right) run(node.right)
            let tmp = node.left
            node.left = node.right
            node.right = tmp
            return node
        }
        return run(root)
    }
}
