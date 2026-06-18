class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []
        const subset = []
        this.dfs(nums, 0, subset, res)
        return res
    }

    dfs(nums, i, subset, res) {
        let size = nums.length;
        if (i >= size) {
            res.push([...subset]);
            return;
        }
        let curr = nums[i]
        subset.push(curr)
        this.dfs(nums, i+1, subset, res)
        subset.pop()
        this.dfs(nums, i+1, subset, res)
    }
}


/**
 *  1, 2, 3
 * 
 *          x
 *        /  \
 *       [1] []
 *       /\
 *    1,2  [1]
 *    / \     
 * 1,2,3 [1,2]
 * 
 * 
 */