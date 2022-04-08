/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0], maxSum = 0
    for(let price of prices){
        min = Math.min(price, min)
        maxSum = Math.max(maxSum, price-min)
    }
    return maxSum
};