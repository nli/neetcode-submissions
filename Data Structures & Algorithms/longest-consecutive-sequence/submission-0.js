class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0
        const set = new Set(nums)
        for (const num of nums) {
            let streak = 0

            if (!set.has(num-1)) {
                let curr = num
                while (set.has(curr)) {
                    streak++
                    curr++
                }
                res = Math.max(res, streak)
            }
        }
        return res;
    }
}

/**
 * 
 * 
 * 
 */