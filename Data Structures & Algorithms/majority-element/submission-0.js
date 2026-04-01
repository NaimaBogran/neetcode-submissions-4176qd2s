class Solution {
    majorityElement(nums) {

        let candidate = null;
        let count = 0;

        for (let num of nums) {

            // If count is 0, choose a new candidate
            if (count === 0) {
                candidate = num;
            }

            // If same as candidate, increase count
            if (num === candidate) {
                count++;
            } else {
                // Otherwise decrease count
                count--;
            }
        }

        return candidate;
    }
}