/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        
        // while (q.length) {
        //     const popped = q.shift(-1);
        //     visited.add(popped.val)
        //     map[popped.val] = popped;
        //     for (let n of popped.neighbors) {
        //         if (!visited.has(n.val)) {
        //             q.push(n);
        //         }
        //     }
        // }
        if (!node) return null;
        const map = new Map()
        const q = [node];
        const newNode = new Node(node.val)
        map.set(node, newNode)
        while (q.length) {
            const popped = q.shift(-1);
            for (let n of popped.neighbors) {
                if (!map.has(n)) {
                    map.set(n, new Node(n.val))
                    q.push(n)
                }
                map.get(popped).neighbors.push(map.get(n))
            }
        }
        return map.get(node);
    }
}


/**
 * 
 *      1 - 2 - 3
 * 
 * 
 */