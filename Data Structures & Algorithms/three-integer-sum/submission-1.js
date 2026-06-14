class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = []
        nums.sort((a, b) => a - b)
        for (let i = 0; i < nums.length; i++) {
            if (nums[i-1] === nums[i]) continue;
            const curr = nums[i]
            let j = i+1, k = nums.length-1
            while (j < k) {
                const sum = curr + nums[j] + nums[k]
                if (sum < 0) {
                    j++
                } else if (sum > 0) k--
                else {
                    res.push([curr, nums[j], nums[k]])
                    j++
                    k--
                    while (j < k && nums[j] === nums[j-1]) j++
                }
            }
        }
        return res;
    }
}

/**
 * 
 * -4,-1,-1,0,1,2
 * 
 */
