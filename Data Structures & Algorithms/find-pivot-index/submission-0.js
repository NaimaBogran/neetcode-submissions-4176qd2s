class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            let leftSum = 0,
                rightSum = 0;
            for (let l = 0; l < i; l++) {
                leftSum += nums[l];
            }
            for (let r = i + 1; r < n; r++) {
                rightSum += nums[r];
            }
            if (leftSum === rightSum) {
                return i;
            }
        }
        return -1;
    }
}