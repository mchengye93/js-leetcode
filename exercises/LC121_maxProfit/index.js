var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        if (price < minPrice) {
            minPrice = price;
        } else {
            let profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};

module.exports = maxProfit;
