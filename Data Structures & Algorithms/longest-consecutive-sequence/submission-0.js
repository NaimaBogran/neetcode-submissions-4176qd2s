class Solution {
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (let num of numSet) {
            // Only start counting if it's the beginning of a sequence
            if (!numSet.has(num - 1)) {
                let current = num;
                let length = 1;

                while (numSet.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}