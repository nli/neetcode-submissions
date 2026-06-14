class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r =  numbers.length-1
        while (l<r) {
            const left = numbers[l], right = numbers[r]
            const sum = left + right
            if (sum === target) return [l+1, r+1]
            sum > target ? r-- : l++
        }
        return []
    }
}
