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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = 0

        const run = (node) => {
            if (!node) return 0
            let left = run(node.left)
            let right = run(node.right)
            let maxDepth = Math.max(left, right)
            res = Math.max(res, left+right)
            return maxDepth+1
        }
        run(root)
        return res;
    }
}


/**
 * 
 * 
 *   1
 *     \
 *      2 -
 *     / \
 *     3  4
 *    /    \
 *   5     6
 * 
 * 
 * 
 * 
 */