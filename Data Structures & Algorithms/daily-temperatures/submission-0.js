class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0)
        const stack = []
        for (let i = 0; i < temperatures.length;i++) {
            const temp = temperatures[i];
            while (stack.length && temperatures[stack.at(-1)] < temp) {
                const prevIndex = stack.pop()
                res[prevIndex] = i-prevIndex;
            }
            stack.push(i);
        }
        return res;
    }
}


/**
 * 
 * i=5
 * [(5,40) ]
 * [1,4,1,2,1,0,0]
 * 
 * 3-2
 */