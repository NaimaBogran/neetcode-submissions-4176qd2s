class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        //k is the position to place the next valid elem
        let k = 0;

        //loop through the arr
        for (let i = 0; i < nums.length; i++)

        //find val
        if (nums[i] !== val){
            //move to front of arr
             nums[k] = nums[i];

             //move k forward
             k++
        }
        //k is number of valid elem
        return k
    }
}
