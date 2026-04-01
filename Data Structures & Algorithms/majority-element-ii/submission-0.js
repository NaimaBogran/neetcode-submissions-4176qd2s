class Solution {
    majorityElement(nums) {
        // Step 1: Find potential candidates
        let candidate1 = null;
        let candidate2 = null;
        let count1 = 0;
        let count2 = 0;

        for (let num of nums) {
            if (num === candidate1) {
                // Same as candidate1 → increase count
                count1++;
            } else if (num === candidate2) {
                // Same as candidate2 → increase count
                count2++;
            } else if (count1 === 0) {
                // Replace candidate1
                candidate1 = num;
                count1 = 1;
            } else if (count2 === 0) {
                // Replace candidate2
                candidate2 = num;
                count2 = 1;
            } else {
                // Current number cancels both candidates
                count1--;
                count2--;
            }
        }

        // Step 2: Verify candidates (VERY IMPORTANT)
        count1 = 0;
        count2 = 0;

        for (let num of nums) {
            if (num === candidate1) count1++;
            else if (num === candidate2) count2++;
        }

        let result = [];
        const n = nums.length;

        // Check if they actually appear more than n/3 times
        if (count1 > Math.floor(n / 3)) {
            result.push(candidate1);
        }
        if (count2 > Math.floor(n / 3)) {
            result.push(candidate2);
        }

        return result;
    }
}