class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        // Simply concatenate the array with itself
        return nums.concat(nums);
    }
}