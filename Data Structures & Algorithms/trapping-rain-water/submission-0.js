class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        // Two pointers at both ends
        let left = 0
        let right = height.length - 1

        // Track the tallest bars seen so far
        let leftMax = 0
        let rightMax = 0

        // Total trapped water
        let water = 0

        while (left < right) {

            // If left bar is smaller, process left side
            if (height[left] < height[right]) {

                // Update max height on the left
                leftMax = Math.max(leftMax, height[left])

                // Water trapped is difference between max and current height
                water += leftMax - height[left]

                // Move left pointer
                left++

            } else {

                // Update max height on the right
                rightMax = Math.max(rightMax, height[right])

                // Water trapped
                water += rightMax - height[right]

                // Move right pointer
                right--
            }
        }

        return water
    }
}