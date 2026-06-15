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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return []
        let q = [{node: root, depth: 0}] // []
        let res = []  // [[1], [2, 3], [4,5,6,7]]
        while (q.length) {
            const {node, depth} = q.shift(-1) // 7
            if (!res[depth]) res[depth] = [node.val]
            else res[depth].push(node.val)
            if (node.left) q.push({node: node.left, depth: depth+1})
            if (node.right) q.push({node: node.right, depth: depth+1})
        }
        return res;
    }
}
