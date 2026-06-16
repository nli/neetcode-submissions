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
    isValidBST(root) {
        let curr = null;
        const dfs = (node) => { // curr = 5
            if (!node) return true;
            const left = dfs(node.left);
            if (curr === null || node.val > curr) curr = node.val
            else return false;
            const right = dfs(node.right)
            return left && right;
        }
        return dfs(root)
    }
}


/***
 * 
 *         5
 *        / \
 *       4    6
 *      /\   / \
 *     x  x 3   7
 * 
 * 
 * 
 */