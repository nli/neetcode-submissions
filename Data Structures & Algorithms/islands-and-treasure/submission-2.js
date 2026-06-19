class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        const offsets = [
            [0,1],
            [1,0],
            [0,-1],
            [-1,0]
        ]
        const ROWS = grid.length;
        const COLS = grid[0].length
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++){
                if (grid[r][c] === 0) {
                    let q = [[r,c,0]]
                    while (q.length) {
                        let [row,col,d] = q.shift(-1)
                        if (grid[row][col] === -1 || grid[row][col] < d) continue;
                        grid[row][col] = d;
                        for (let [rd, cd] of offsets) {
                            const nr = rd+row, cr = cd+col;
                            const rowBound = nr >=0 && nr < ROWS
                            const colBound = cr >=0 && cr < COLS

                            const isSmaller = grid[row][col] === -1 || grid[row][col] < d
                            if (rowBound && colBound && !isSmaller) {
                                q.push([rd+row, cd+col, d+1])
                            }
                        }
                    }
                }
            }
        }
    }
}



/**
 * 
 * 
 * 
 * 3,-1,0, 1
 * 2, 2,1,-1
 * 1,-1,2,-1
 * 0,-1,3, 4
 * 
 * 
 * 
 * 
 */