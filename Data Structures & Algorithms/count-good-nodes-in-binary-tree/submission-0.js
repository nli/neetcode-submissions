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
    goodNodes(root) {
        let count = 0

        const dfs = (node, max) => {
            if (!node) return;
            if (node.val >= max) {
                count++
                max = node.val
            }
            dfs(node.left, max)
            dfs(node.right, max)
        }

        dfs(root, root.val)
        return count
    }
}

/**
 * 
 *        2
 *       / \
 *      1   1
 *     /    /\
 *    3    1   5
 * 
 * 
 * 
 */