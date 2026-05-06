class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const n = nums.length;
        const store = new Set();
        for (let i = 1; i <= n; i++) store.add(i);

        for (let num of nums) {
            store.delete(num);
        }

        return Array.from(store);
    }
}