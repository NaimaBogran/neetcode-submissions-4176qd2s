class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        const n = nums.length;
        let res = 0;
        for (let i = 0; i < n; i++) {
            let cnt = 0;
            for (let j = i; j < n; j++) {
                if (nums[j] === 0) break;
                cnt++;
            }
            res = Math.max(res, cnt);
        }
        return res;
    }
}