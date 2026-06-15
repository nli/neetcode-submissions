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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return []
        let q = [[root, 0]]
        const res = []
        while (q.length) {
            const [node, depth] = q.shift(-1)
            if (res.length === depth) res.push(node.val);
            if (node.right) q.push([node.right, depth+1])
            if (node.left) q.push([node.left, depth+1])
        }
        return res;
    }
}
