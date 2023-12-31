/*
给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
请你计算并返回达到楼梯顶部的最低花费。

示例 1：
输入：cost = [10,15,20]
输出：15
解释：你将从下标为 1 的台阶开始。
- 支付 15 ，向上爬两个台阶，到达楼梯顶部。
总花费为 15 。

示例 2：
输入：cost = [1,100,1,1,1,100,1,1,100,1]
输出：6
解释：你将从下标为 0 的台阶开始。
- 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
- 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
- 支付 1 ，向上爬一个台阶，到达楼梯顶部。
总花费为 6 。
*/ 

/*
思想：定义一个数组 dp，其中 dp[i] 表示到达第 i 个台阶的最低花费。初始状态是 dp[0] = cost[0] 和 dp[1] = cost[1]。
然后从第三个台阶开始，对于每个台阶 i，计算到达它的最低花费，即 dp[i] = cost[i] + Math.min(dp[i - 2], dp[i - 1])。
最后返回 dp 数组中最后两个元素的最小值，即为到达楼梯顶部的最低花费。
*/ 
var minCostClimbingStairs = function(cost) {
    // dp[i] 表示到达第 i 个台阶的最低花费，第一个元素dp[0]是到第一阶的花费即cost[0]，第二个元素dp[1]是到第二阶的花费即cost[1]
    let dp = [cost[0], cost[1]], i = 2
    while(++i< cost.length) 
    // 题目规则是每次爬一阶或两阶，所以到达第 i 个台阶的最低花费是从第i-1或i-2爬到第i阶的花费cost[i] 
    // 加上到达第i-1 和 第i- 2个台阶的最低花费中的最小值。
        dp[i] = cost[i] + Math.min(dp[i - 2], dp[i - 1])
    // 因为可以从最后一个台阶或倒数第二个台阶直接到楼顶，不需要有额外花费，所以从最后一个台阶和倒数第二个台阶到楼顶的最低花费都是0 
    // 只用计算到达最后一个台阶和倒数第二个台阶的最低花费即可
    return Math.min(dp[i - 2], dp[i - 1])
};

const minCost = (cost)=>{
    let dp = [cost[0],cost[1]],i=2
    while(i<cost.length){
        dp[i] = cost[i] + Math.min(dp[i-2],dp[i-1])
        i++;
    }
    return Math.min(dp[i-2],dp[i-1])
}

const calCost = (cost)=>{
    let dp = new Array(cost.length).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for(let i=2;i<cost.length;i++){
        dp[i] = cost[i]+Math.min(dp[i-1],dp[i-2])
    }
    return Math.min(dp[i-1],dp[i-2])
}