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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const map = {}
        for (let i = 0; i < inorder.length; i++) {
            map[inorder[i]] = i
        }
        let pCount = 0
        const dfs = (l,r) => {
            if (l > r) return null;
            const nodeVal = preorder[pCount]
            pCount++;
            const m = map[nodeVal];
            const node = new TreeNode(nodeVal)
            node.left = dfs(l, m-1);
            node.right = dfs(m+1, r)
            return node;
        }
        return dfs(0, inorder.length-1)
    }
}


/**
 * 
 *          1
 *          /\
 *         2  3
 *        /\  /\
 *       4      7
 * 
 * 
 * 
 * [1,2,3,4,5,6,7] pre order
 * 
 * [4,2,5,1,3,6,7]
 *  0,1,2,3,4,5,6
 *    ^     ^   
 *  Math.floor(3+0)/2
 * 
 * 
 * 
 */