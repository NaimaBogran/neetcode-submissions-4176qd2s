class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        //k is the place to hold valid elem
        let k = 0

        //loop through the arr
        for (let i = 0; i < nums.length; i++){
            
        //check for elem !== val
        if(nums[i] !== val){

        //move valid elem to k
        nums[k] = nums[i]

        //move to next k
        k++
        }
        }
        //return k
        return k
    }
}
