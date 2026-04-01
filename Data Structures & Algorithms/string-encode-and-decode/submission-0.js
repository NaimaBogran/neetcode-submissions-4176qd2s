class Solution {
    encode(strs) {
        let encoded = "";
        
        for (let s of strs) {
            encoded += s.length + "#" + s;
        }
        
        return encoded;
    }

    decode(s) {
        let result = [];
        let i = 0;
        
        while (i < s.length) {
            let j = i;
            while (s[j] !== "#") {
                j++;
            }
            
            let length = parseInt(s.substring(i, j));
            let str = s.substring(j + 1, j + 1 + length);
            
            result.push(str);
            i = j + 1 + length;
        }
        
        return result;
    }
}