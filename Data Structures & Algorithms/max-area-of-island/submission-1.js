class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let area = 0
        const iterate = [
            [0,1],
            [1,0],
            [0,-1],
            [-1,0]
        ]

        const ROWS = grid.length, COLS = grid[0].length;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c]) {
                    let currArea = 0;
                    const s = [[r,c]];
                    while (s.length) {
                        const [row, col] = s.pop();
                        if (grid[row][col]) {
                            currArea++
                            grid[row][col] = 0
                        }
                        for (let [ro, co] of iterate) {
                            const newRow = row + ro, newCol = col+co
                            const rowBound = newRow >=0 && newRow < ROWS
                            const colBound = newCol >=0 && newCol < COLS
                            if (rowBound && colBound && grid[newRow][newCol]) s.push([newRow, newCol])
                        }
                    }
                    area = Math.max(area, currArea)
                }
            }
        }
        return area;
    }
}
