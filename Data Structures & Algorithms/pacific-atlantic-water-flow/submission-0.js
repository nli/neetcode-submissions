class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length
        const COLS = heights[0].length

        let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const offset = [
            [0,1],
            [1,0],
            [-1,0],
            [0,-1]
        ]

        const dfs = (r,c, ocean) => {
            ocean[r][c] = true
            for (let [rd,cd] of offset) {
                const row = r+rd, col = c+cd;
                const rowBound = row >=0 && row < ROWS;
                const colBound = col >=0 && col < COLS;
                if (rowBound && colBound && !ocean[row][col] &&  heights[row][col] >= heights[r][c]) {
                    dfs(row,col, ocean)    
                }
            }
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0,c,pac)
            dfs(ROWS-1, c, atl)
        }
        for (let r = 0; r < ROWS; r++) {
            dfs(r,0, pac)
            dfs(r, COLS-1, atl)
        }

        let res = []
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r,c])
                }
            }
        }
        return res;
    }
}
