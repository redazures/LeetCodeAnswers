/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit=0
    for(let i=0;i<prices.length;i++){
        let j=i+1
        if(prices[j]>prices[i]){
            maxprofit=maxprofit+prices[j]-prices[i]
        }
    }
    return maxprofit
};