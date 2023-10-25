/*
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
*/ 

var maxProfit = function(prices) {
    let maxProfit = 0; // 最大利润
    let minPrice = prices[0]; // 最低买入价格

    for (let i = 1; i < prices.length; i++) {
        // 如果当前价格比最低买入价格更低，更新最低买入价格
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        // 如果当前价格减去最低买入价格大于最大利润，更新最大利润
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};


function maxProfit(prices){
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 0;i<prices.length;i++){
        if(minPrice > prices[i]){
            minPrice = prices[i];
        }else if(maxProfit < prices[i] - minPrice){
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}

// 错误解法
// var maxProfit = function(prices) {
//     if (prices.length < 2) {
//         return 0;
//     }
//     let l = 0 , r = prices.length-1;
//     let profit = 0;let max = 0;
//     /*
//     内层 while 循环中使用的是大于号 > 来判断买入和卖出的条件。
//     这样做的问题在于，如果当前买入价格比卖出价格低，内层 while 循环就会退出，这可能会导致跳过一些更好的卖出时机。
//     */ 
//     while(l<r){
//         while(prices[l]>prices[r] && l<r){ 
//             r--
//         }
//         if (prices[r] > prices[l]) {
//             profit = prices[r] - prices[l];
//             max = Math.max(profit, max);
//         }
//         l++;
//     }
//     return max
// };