class Solution {
    subarraySum(nums, k) {
        // Map to store: prefixSum → how many times we've seen it
        const map = new Map();

        // Important: base case
        // A prefix sum of 0 occurs once (before starting)
        map.set(0, 1);

        let currentSum = 0;
        let count = 0;

        for (let num of nums) {
            // Add current number to running sum
            currentSum += num;

            // Check if there is a prefix sum we can subtract to get k
            const needed = currentSum - k;

            // If we've seen this before, it means we found subarrays
            if (map.has(needed)) {
                count += map.get(needed);
            }

            // Record current prefix sum in map
            map.set(currentSum, (map.get(currentSum) || 0) + 1);
        }

        return count;
    }
}