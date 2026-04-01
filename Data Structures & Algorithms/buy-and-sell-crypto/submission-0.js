class Solution {
    maxProfit(prices) {
        let lowest = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            let currentPrice = prices[i];

            if (currentPrice < lowest) {
                lowest = currentPrice;
            } else {
                let profit = currentPrice - lowest;
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }
}