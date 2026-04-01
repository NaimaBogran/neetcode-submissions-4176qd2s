class Solution {
    longestCommonPrefix(strs) {

        let result = "";

        // Loop through each character of first string
        for (let i = 0; i < strs[0].length; i++) {

            let char = strs[0][i];

            // Compare with all other strings
            for (let j = 1; j < strs.length; j++) {

                if (i >= strs[j].length || strs[j][i] !== char) {
                    return result;
                }
            }

            result += char;
        }

        return result;
    }
}