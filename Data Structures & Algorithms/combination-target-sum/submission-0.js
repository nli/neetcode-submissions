class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = []
        this.dfs(nums, 0, [], target,res, 0)
        return res;
    }


    dfs(nums, total, subset, target,res, idx) {
        if (total >= target) {
            if (total === target ) res.push([...subset])
            return
        }
        for (let i = idx; i < nums.length; i++) {
            const curr = nums[i]
            total += curr
            subset.push(curr)
            this.dfs(nums, total, subset, target, res, i)
            total -= curr
            subset.pop();
        }
    }
}


/**
 * 
 * 2,5
 * 
 * target: 9
 * 
 *              0
 *              |
 *     2     5    6    9
 *  2  
 *             
 *             
 * 
 * 
 * 
 * 
 */