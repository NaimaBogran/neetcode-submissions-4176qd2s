class Solution {
    /**
     * @param {number[]} nums
     * @return {void}
     */
    sortColors(nums) {

        let left = 0;              // next position for 0
        let right = nums.length - 1; // next position for 2
        let i = 0;

        while (i <= right) {

            if (nums[i] === 0) {
                // Swap with left
                [nums[i], nums[left]] = [nums[left], nums[i]];
                left++;
                i++;
            } 
            else if (nums[i] === 2) {
                // Swap with right
                [nums[i], nums[right]] = [nums[right], nums[i]];
                right--;
                // DO NOT increment i here
            } 
            else {
                // nums[i] === 1
                i++;
            }
        }
    }
}