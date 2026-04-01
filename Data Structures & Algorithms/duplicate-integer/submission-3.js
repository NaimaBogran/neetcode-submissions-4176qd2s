class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //loop through each num in arr
        for (let i = 0; i < nums.length; i++){
        //dont compare to itself (j = i + 1)
        for (let j = i + 1; j < nums.length; j++){
        //find equals = duplicate
        //return true
        if (nums[i] === nums[j]){
            return true
        }
        }
        }
        //return false
        return false
    }
}
