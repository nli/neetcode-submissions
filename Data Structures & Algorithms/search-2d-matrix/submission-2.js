class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROW = matrix.length, COL = matrix[0].length
        let left = 0, right = ROW * COL-1
        while (left <= right) {
            let mid = Math.floor((left+right)/2)
            let r = Math.floor(mid/COL), c = mid % COL
            if (matrix[r][c] === target) return true
            else if (matrix[r][c] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return false
    }
}

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 1, 2, 4, 8, 10 ,11, 12, 13, 14, 20, 30, 40
 *       m
 * l 
 *                  r                                       r
 * row = 3, col = 4
 * left = 0, right = row + col - 1 = 11
 * 
 * mid = (left+right)/2
 * newRow = floor (mid)/row 
 * newCol = mid % 4
 * 
 * m = (11+0)/2 = 5
 * 
 * newRow = 5/3 = 1
 * newCol = 5%3 - 1 = 1
 * 
 *  11 < 10 ?
 *   right = 5
 * 
 * 
 * m = (5+0)/2 = 2
 * newRow = 2/3 = 0
 * newCol = 2 % 3 = 3 - 1 = 2
 * 
 *
 * 
 */