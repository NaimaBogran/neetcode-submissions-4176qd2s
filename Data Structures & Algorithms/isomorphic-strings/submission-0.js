class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    helper(s, t) {
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
                return false;
            }
            map.set(s[i], t[i]);
        }
        return true;
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        return this.helper(s, t) && this.helper(t, s);
    }
}