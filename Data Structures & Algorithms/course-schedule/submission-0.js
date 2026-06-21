class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = {}
        for (let [a,b] of prerequisites) {
            !graph[b] ? graph[b] = [a] : graph[b].push(a)
        }

        let visited = new Set()
        const visiting = new Set()

        const dfs = (n) => {
            if (visiting.has(n)) return false;
            const neighbors = graph[n] || []
            visiting.add(n)
            for (let neighbor of neighbors) {
                if (!visited.has(n)) {
                    if (!dfs(neighbor)) return false;
                }
            }
            visiting.delete(n)
            visited.add(n)
            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}


/**
 *  n = 4
 *  [0,1] [1,2]
 * 
 * 
 * visiting:
 * 
 * 
 * 
 * 
 * visited:
 * 2
 * 1
 * 0
 *        2
 *       /
 *      1
 *      /
 *     0
 * 
 *  
 * 
 */