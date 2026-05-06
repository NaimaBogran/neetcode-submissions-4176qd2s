class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        for (let i = 0; i < arr.length; i++) {
            let flag = true;
            for (let j = 0; j < arr.length; j++) {
                if (i === j) continue;

                if (arr[i] === arr[j]) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                k--;
                if (k === 0) {
                    return arr[i];
                }
            }
        }
        return '';
    }
}