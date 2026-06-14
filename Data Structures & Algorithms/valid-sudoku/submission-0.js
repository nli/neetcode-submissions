class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
const row = Array.from({ length: 9 }, () => new Set());
const col = Array.from({ length: 9 }, () => new Set());
const box = Array.from({ length: 9 }, () => new Set());


        for (let r = 0; r < 9;r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c]
                let b = (Math.floor(r/3) * 3) + (Math.floor(c/3) % 3)

                if (val !== '.') {
                    if (row[r].has(val) || col[c].has(val) || box[b].has(val)) {
                        return false
                    }
                    row[r].add(val)
                    box[b].add(val)
                    col[c].add(val);
                }
            }
        }
        return true
    }
}
/**
 * 
 *   0,1,2,3
 * 0 x x x x
 * 1 x x x
 * 2 x x x 
 * 3
 * 
 * floor(r / 3) * 3 + col % 3
 * 
 */