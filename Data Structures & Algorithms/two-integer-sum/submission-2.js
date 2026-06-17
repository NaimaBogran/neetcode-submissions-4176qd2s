class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {}
   
        for(let index = 0; index < nums.length; index++){
            const key = `${target - nums[index]}` 
            if(hashMap[key] !== undefined){
                console.log(hashMap[key], key)
                return [index, hashMap[key]]
            }
            else{hashMap[nums[index]] = index
            console.log(hashMap)
            }

        }
    }

}


// [1,5,4,3]

// 9-1 = 8

//nums 