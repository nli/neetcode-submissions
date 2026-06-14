class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length === 1) return nums[0] === target ? 0 : -1
        let l=0, r = nums.length-1
        while (l < r) {
            let m = Math.floor((r+l)/2)
            const curr = nums[m]
            console.log(m, curr, l ,r)
            if (curr < target) {
                l = m+1
            } else {
                r = m
            }
        }
        return target === nums[l] ? l : -1
    }
}

/**
 * t = 4
 * [-1,0,2,4,6,8]
 *           m
 *         l
 *             r
 * l = 0, r = 5
 * 
 * [2,5]
 *  l r
 *  
 * 
 */
