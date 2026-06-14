class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length-1

        while (l < r) {
            let m = (l+r)/2|0
            if (nums[m] > nums[r]) {
                l = m+1
            } else r = m;
        }
        return nums[l]
    }
}

/**
 * 
 * 3,4,5,6,1,2
 *         m
 *       l
 *         r
 * 
 * 6,1,2,3,4,5
 *     
 * l
 *           r
 * 
 * 
 * 
 * if middle is bigger than right
 *      m = l+1
 * else r = m
 * if middle is smaller than the two
 *    r = m
 * 
 * if ()
 */
