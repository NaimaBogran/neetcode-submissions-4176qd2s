class Solution {
    firstMissingPositive(nums) {
        const n = nums.length;

        // Step 1: Place each number in its correct position
        for (let i = 0; i < n; i++) {

            // Keep swapping until the current number is in the right place
            while (
                nums[i] > 0 &&                  // must be positive
                nums[i] <= n &&                 // must be within range
                nums[nums[i] - 1] !== nums[i]   // avoid infinite loop
            ) {
                // Swap nums[i] with its correct position
                let correctIndex = nums[i] - 1;

                [nums[i], nums[correctIndex]] =
                    [nums[correctIndex], nums[i]];
            }
        }

        // Step 2: Find the first missing positive
        for (let i = 0; i < n; i++) {
            // If index i doesn't have value i+1 → missing
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }

        // If all positions are correct → answer is n+1
        return n + 1;
    }
}