class Solution {
    isPalindrome(s) {
        //clean string
        let cleaned = s.replace(/[^a-z0-9]/gi, "");

        //make lowercased
        cleaned = cleaned.toLowerCase();

        //compare with reverse string
        let reversed = cleaned.split("").reverse().join("")

        return cleaned === reversed 
    }
}
