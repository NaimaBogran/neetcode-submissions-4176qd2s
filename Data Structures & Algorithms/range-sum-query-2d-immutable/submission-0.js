class NumMatrix {
    constructor(matrix) {
        // Store the original matrix
        // No preprocessing needed
        this.matrix = matrix;
    }

    sumRegion(row1, col1, row2, col2) {
        let sum = 0;

        // Loop through each row in the given range
        for (let r = row1; r <= row2; r++) {

            // For each row, loop through each column in the range
            for (let c = col1; c <= col2; c++) {

                // Add current cell value to sum
                sum += this.matrix[r][c];
            }
        }

        // Return the final sum of the rectangle
        return sum;
    }
}