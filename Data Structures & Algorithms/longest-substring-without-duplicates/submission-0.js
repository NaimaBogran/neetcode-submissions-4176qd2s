class Solution {
    lengthOfLongestSubstring(s) {
        // Set to track characters currently in window
        let set = new Set();
        
        let left = 0;          // left pointer
        let maxLength = 0;     // track longest valid substring
        
        for (let right = 0; right < s.length; right++) {
            
            // If character already exists, shrink window
            while (set.has(s[right])) {
                // Remove left character from set
                set.delete(s[left]);
                
                // Move left pointer forward
                left++;
            }
            
            // Add current character to set
            set.add(s[right]);
            
            // Update max length
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}