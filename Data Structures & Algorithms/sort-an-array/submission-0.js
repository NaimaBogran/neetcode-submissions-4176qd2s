class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        // QuickSort helper
        const quickSort = (left, right) => {
            if (left >= right) return;

            // Partition the array and get pivot index
            let pivotIndex = partition(left, right);

            // Recursively sort left and right parts
            quickSort(left, pivotIndex - 1);
            quickSort(pivotIndex + 1, right);
        };

        // Partition function
        const partition = (left, right) => {
            let pivot = nums[right]; // choose last element as pivot
            let i = left; // pointer for smaller elements

            for (let j = left; j < right; j++) {
                // If current element is smaller than pivot
                if (nums[j] < pivot) {
                    // Swap nums[i] and nums[j]
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    i++;
                }
            }

            // Place pivot in correct position
            [nums[i], nums[right]] = [nums[right], nums[i]];

            return i; // return pivot index
        };

        quickSort(0, nums.length - 1);
        return nums;
    }
}