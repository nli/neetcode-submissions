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
        const visited = new Set();

        let q = []
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++){
                if (grid[r][c] === 0) {
                    q.push([r,c,0]);
                    visited.add(r + ',' + c)
                }
            }
        }

        let dist = 0
        while (q.length) {
            const newQ = []
            for (const [row, col] of q) {
                grid[row][col] = dist
                for (let [rd, cd] of offsets) {
                    const nr = rd+row, nc = cd+col;
                    const rowBound = nr >=0 && nr < ROWS
                    const colBound = nc >=0 && nc < COLS
                    if (rowBound && colBound && grid[nr][nc] !== -1 && !visited.has(nr + ',' + nc)) {
                        newQ.push([nr, nc])
                        visited.add(nr + ',' + nc)
                    }
                }           
            }
            console.log(newQ)
            dist++
            q = newQ
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