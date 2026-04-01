class Solution {
    isPalindrome(s) {
        // Step 1: Remove non-alphanumeric characters
        let cleaned = s.replace(/[^a-z0-9]/gi, "");
        
        // Step 2: Make lowercase
        cleaned = cleaned.toLowerCase();
        
        // Step 3: Compare with reversed version
        let reversed = cleaned.split("").reverse().join("");
        
        return cleaned === reversed;
    }
}
