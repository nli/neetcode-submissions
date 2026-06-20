class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let q = []
        let fresh = 0
        let hasFresh = false
        const ROWS = grid.length, COLS = grid[0].length
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                hasFresh = true
                if (grid[i][j] === 1) fresh++
                if (grid[i][j] === 2) {
                    q.push([i,j])
                }
            }
        }

        if (!hasFresh) return -1

        const offset = [
            [0,1],
            [1,0],
            [-1,0],
            [0,-1]
        ]

        let d = 0
        while (fresh && q.length) {
            let newQ = []
            for (let [row, col] of q) {
                for (let [dr,dc] of offset) {
                    const r = row + dr
                    const c = col + dc
                    const rowBound = r >=0 && r < ROWS
                    const colBound = c >= 0 && c < COLS
                    if (rowBound && colBound && grid[r][c] === 1) {
                        fresh--
                        grid[r][c] = 2
                        newQ.push([r,c])
                    }

                }
            }
            q = newQ
            d++
        }
        return fresh === 0 ? d : -1
    }
}
