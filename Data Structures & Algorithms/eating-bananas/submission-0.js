class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // 1,4,3,2
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles);
        
        // const res = Infinity
        let l = 1, r = max // l = 2, r = 2
        while (l < r) {
            let m = (l+r)/2 | 0 // 1
            let curr = 0 // 010
            for (let pile of piles) {
                curr += Math.ceil(pile/m)
            }
            if (curr <= h) { // 10 < 9
                r = m
            } else {
                l=m+1
            }
        }
        return r
    }
}


/**
 * 
 * 
 * max rate = 4
 * 
 * [1,2,3,4]
 *    m
 *  l
 *    r
 * 
 *  6 < 9? r = m
 * curr hour = 1 + 2 + 2 + 1 
 * i=0 pile
 * 
 * Math.ceil(1/2) = 1
 * i=2 pile
 * 3/2 = 2
 * 
 * 
 */
