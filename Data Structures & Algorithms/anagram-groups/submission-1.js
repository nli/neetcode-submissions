class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupMap = new Map()
        const aCharCode = 'a'.charCodeAt(0);
        for (let str of strs) {
            let counts = new Array(26).fill(0)
            for (let char of str) {
                const index = char.charCodeAt(0) - aCharCode;
                counts[index]++
            }

            let groupCode = ''
            for (let i = 0; i < counts.length; i++) {
                const value = counts[i]
                const char = String.fromCharCode(i+aCharCode);
                if (counts[i]) {
                    groupCode += char + `${value}` 
                }
            }
            groupMap.set(groupCode, [...groupMap.get(groupCode) || [], str]);

        }

        const res = []
        groupMap.forEach((value, key) => {
            res.push(value)
        })
        return res;
    }
}



// a1c1t1
// o1p1s1t1