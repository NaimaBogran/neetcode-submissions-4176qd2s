class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        // Step 1: Sort the array so we can use the two-pointer technique
        nums.sort((a, b) => a - b);

        const result = [];

        // Step 2: Loop through the array, fixing one number at a time
        for (let i = 0; i < nums.length; i++) {

            // If the current number is greater than 0,
            // we can stop because 3 positive numbers can't sum to 0
            if (nums[i] > 0) break;

            // Skip duplicates for the first number
            // This prevents repeating the same triplet
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Step 3: Two pointers
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {

                const sum = nums[i] + nums[left] + nums[right];

                // If we found a valid triplet
                if (sum === 0) {

                    result.push([nums[i], nums[left], nums[right]]);

                    // Move both pointers inward
                    left++;
                    right--;

                    // Skip duplicate numbers for the second value
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // Skip duplicate numbers for the third value
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }

                } 
                // If the sum is too small, move left pointer right
                else if (sum < 0) {
                    left++;
                } 
                // If the sum is too large, move right pointer left
                else {
                    right--;
                }
            }
        }

        return result;
    }
}