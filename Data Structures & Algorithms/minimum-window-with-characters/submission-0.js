class Solution {
    minWindow(s, t) {
        // Edge case
        if (t.length > s.length) return "";

        // Step 1: Count characters in t
        const countT = {};
        for (let char of t) {
            countT[char] = (countT[char] || 0) + 1;
        }

        let window = {};
        let have = 0;                    // how many chars matched
        let need = Object.keys(countT).length; // total unique chars needed

        let left = 0;
        let res = [-1, -1];
        let minLength = Infinity;

        // Step 2: Expand window
        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            // Add char to window
            window[char] = (window[char] || 0) + 1;

            // Check if this char now satisfies requirement
            if (countT[char] && window[char] === countT[char]) {
                have++;
            }

            // Step 3: Try shrinking window
            while (have === need) {

                // Update result if smaller window found
                if ((right - left + 1) < minLength) {
                    res = [left, right];
                    minLength = right - left + 1;
                }

                // Remove left char from window
                window[s[left]]--;

                // If removing breaks requirement → window invalid
                if (
                    countT[s[left]] &&
                    window[s[left]] < countT[s[left]]
                ) {
                    have--;
                }

                left++; // shrink window
            }
        }

        // Step 4: Return result
        if (minLength === Infinity) return "";

        return s.slice(res[0], res[1] + 1);
    }
}