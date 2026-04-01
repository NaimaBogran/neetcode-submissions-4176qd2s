class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        // Stack will store: [startIndex, height]
        const stack = [];

        // Track the maximum rectangle area
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {

            // Start position of the current rectangle
            let start = i;

            // If current height is smaller than the stack top,
            // we calculate areas for rectangles that end here
            while (stack.length && stack[stack.length - 1][1] > heights[i]) {

                let [index, height] = stack.pop();

                // width = current position - starting index
                let width = i - index;

                maxArea = Math.max(maxArea, height * width);

                // Update start so the new bar can extend backwards
                start = index;
            }

            // Push the current bar with its start index
            stack.push([start, heights[i]]);
        }

        // Process any remaining bars in the stack
        for (const [index, height] of stack) {

            let width = heights.length - index;

            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }
}