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
    maxDepth(root, depth = 0) {
        if (!root) return depth;
        const left = this.maxDepth(root.left, depth+1)
        const right = this.maxDepth(root.right, depth+1)
        return Math.max(left, right);
    }
}


/**
 * 
 *   1
 * 2   3
 *    /
 *   4
 * 
 * 
 */