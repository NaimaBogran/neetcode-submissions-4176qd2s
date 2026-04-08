class Solution {
    characterReplacement(s, k) {
        let count = new Array(26).fill(0); // frequency of A-Z
        let left = 0;
        let maxCount = 0; // count of most frequent char in window
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {

            // Convert char to index (A = 0, B = 1, ...)
            let index = s.charCodeAt(right) - 65;

            // Increase frequency of current character
            count[index]++;

            // Update the most frequent character count
            maxCount = Math.max(maxCount, count[index]);

            // If window is invalid → shrink it
            while ((right - left + 1) - maxCount > k) {

                // Remove left character from window
                count[s.charCodeAt(left) - 65]--;

                left++;
            }

            // Update max length
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}