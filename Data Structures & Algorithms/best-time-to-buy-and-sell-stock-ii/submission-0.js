class Solution {
    maxProfit(prices) {
        let profit = 0;

        // Loop through the array starting from day 1
        for (let i = 1; i < prices.length; i++) {

            // If price increased from yesterday
            if (prices[i] > prices[i - 1]) {

                // Add the profit (difference)
                profit += prices[i] - prices[i - 1];
            }
        }

        // Return total accumulated profit
        return profit;
    }
}