class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        const tMap = new Map();
        for (let char of s) {
            sMap.set(char, sMap.get(char) + 1 || 1)
        }

        for (let char of t) {
            tMap.set(char, tMap.get(char) +1 || 1)
        }

        let isAnagram = true
        if (sMap.size !== tMap.size) return false;
        sMap.forEach((value, key) => {
            console.log(key, sMap.get(key), tMap.get(key))
            if (sMap.get(key) !== tMap.get(key)) {
                isAnagram = false
            }
        })

        return isAnagram;
        
    }
}
