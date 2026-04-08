class Solution {
    checkInclusion(s1, s2) {
        // If s1 is longer, impossible
        if (s1.length > s2.length) return false;

        // Frequency arrays for 'a' to 'z'
        let s1Count = new Array(26).fill(0);
        let windowCount = new Array(26).fill(0);

        // Build frequency for s1
        for (let char of s1) {
            s1Count[char.charCodeAt(0) - 97]++;
        }

        let left = 0;

        // Start sliding window
        for (let right = 0; right < s2.length; right++) {

            // Add current character to window
            windowCount[s2.charCodeAt(right) - 97]++;

            // If window size > s1 length → shrink from left
            if (right - left + 1 > s1.length) {
                windowCount[s2.charCodeAt(left) - 97]--;
                left++;
            }

            // Check if both frequency arrays match
            if (arraysMatch(s1Count, windowCount)) {
                return true;
            }
        }

        return false;
    }
}

// Helper function to compare two arrays
function arraysMatch(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}