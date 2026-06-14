class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1
        let res = new Array(nums.length).fill(1)
        for (let i=0; i <nums.length; i++) {
            res[i] *= prefix;
            prefix *= nums[i];
        }

        prefix = 1
        for (let i = nums.length-1; i>=0; i--) {
            res[i] *= prefix;
            prefix *= nums[i];
        }
        return res;
    }
}


/**
 * 
 * 1, 2, 4 ,6
 * 
 * 
 * i=0
 * prefix = 1
 * 
 * 1, x, x, x
 * 
 * i=1
 * prefix = 1*1 = 1
 * 1,1,x,x
 * 
 * i=2
 * prefix = 2*1 = 2
 * 1,1,2,x
 * 
 * i= 3
 * prefix = 2*4 = 8
 * 1,1,2,8
 * 
 * right most done already
 * 
 * reverse order
 * 
 * i = 3
 * prefix = 1
 * 1,1,2,8
 * 
 * i = 2, 
 * prefix = 1*6 = 6
 * 1,1,(2*6),8
 * 
 * i = 1
 * 
 * prefix = 6 * 4 = 24
 * 1,24,12,8
 * 
 * i = 0
 * 
 * pefix = 24 * 2 = 48
 * 
 * 28,24,12,8
 * 
 */