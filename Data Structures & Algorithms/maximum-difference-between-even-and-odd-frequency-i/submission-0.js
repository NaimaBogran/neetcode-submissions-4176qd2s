class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const count = new Array(26).fill(0);
        for (const c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let res = -Infinity;
        for (const odd of count) {
            if (odd === 0 || odd % 2 === 0) continue;
            for (const even of count) {
                if (even === 0 || even % 2 === 1) continue;
                res = Math.max(res, odd - even);
            }
        }
        return res;
    }
}