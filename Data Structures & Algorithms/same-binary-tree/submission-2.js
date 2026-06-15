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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p?.val !== q?.val) return false
        if (!p) return true;
        let left = this.isSameTree(p.left, q.left)
        let right =this.isSameTree(p.right, q.right)
        return left && right;
    }
}

/**
 * 
 * 
 *   1
 *  / \
 * 2   3
 * 
 * 
 *    1
 *   / \
 *  2   3
 * 
 *    10
 *   /  \
 *  5    x
 * x \
 *   15
 * 
 */