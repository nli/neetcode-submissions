class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length, COLS = grid[0].length
        const stack = [];

        const iterate = [
            [0,1],
            [1,0],
            [-1,0],
            [0,-1]
        ]

        let res = 0
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    res++
                    stack.push([r,c])
                    while (stack.length) {
                        const [row, col] = stack.pop();
                        const isRowBound = row >= 0 && row < ROWS
                        const isColBound = col >= 0 && col < COLS
                        if (isRowBound && isColBound && grid[row][col] === '1') {
                            grid[row][col] = "-1"
                            for (let [rOffset, cOffset] of iterate) {
                                stack.push([row + rOffset, col + cOffset])
                            }
                        }
                    }
                }
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