class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            let curSum = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] <= nums[j - 1]) {
                    break;
                }
                curSum += nums[j];
            }
            res = Math.max(res, curSum);
        }
        return res;
    }
}