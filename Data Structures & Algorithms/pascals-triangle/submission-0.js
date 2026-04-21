class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let res = [];
        for (let n = 0; n < numRows; n++) {
            let row = [1];
            let val = 1;
            for (let k = 1; k <= n; k++) {
                val = (val * (n - k + 1)) / k;
                row.push(val);
            }
            res.push(row);
        }
        return res;
    }
}