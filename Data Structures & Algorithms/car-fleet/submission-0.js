class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const map = {}
        for (let i = 0; i < position.length; i++) {
            const s = speed[i]
            const p = position[i]
            map[p] = map[p] ? Math.min(math[p], speed[i]) : s;
        }
        position.sort((a,b) => b-a)

        const stack = []
        for (let p of position) {
            const time = (target-p)/map[p];

            if (!stack.length || stack.at(-1) < time) {
                stack.push(time)
            };
        }
        return stack.length
    }
}


/**
 * 
 * [7,4,1,0]
 * [1,2,2,1]
 * 
 * cond to push = stack.pop() <= curr time 
 * (10-7)/1 = 3 hours
 * 
 * (10-4)/2 = 3 hours
 * 
 * (10-1)/2 = 4.5
 * (10)/1 = 10
 */
