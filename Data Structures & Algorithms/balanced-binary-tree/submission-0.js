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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true
        const dfs = (node, depth = 0) => {
            if (!node) return depth
            let left = dfs(node.left, depth+1)
            let right =dfs(node.right, depth+1)
            if (Math.abs(left-right) > 1) res = false;
            return Math.max(left, right)
        }
        dfs(root)
        return res
    }
}



/**
 * 
 *     1
 *    / \
 *   2   3
 *      /
 *     4
 *      \
 *       5
 * 
 * 
 * 
 */