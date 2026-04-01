class Solution {
    twoSum(nums, target) {
        let set = new Set();

        for (let i = 0; i < nums.length; i++){
            if (set.has(target - nums[i])){
                return [nums.indexOf(target - nums[i]), i];
            } else {
                set.add(nums[i]);
            }
        }
    }
}
