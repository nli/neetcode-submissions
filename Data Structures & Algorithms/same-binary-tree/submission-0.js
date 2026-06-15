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
        let res = true;

        const dfs = (node1, node2) => {
            if (node1?.val !== node2?.val) {
                res = false;
                return
            }
            if (!node1) return;
            dfs(node1.left, node2.left);
            dfs(node1.right, node2.right);
            return;
        }
        dfs(p,q)
        return res;
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
 * 
 */