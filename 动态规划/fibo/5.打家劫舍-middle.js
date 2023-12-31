
/*
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
    偷窃到的最高金额 = 1 + 3 = 4 。

示例 2：
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
*/

const rob = function (nums) {
    const dp = new Array(nums.length+1).fill(0)
    dp[0] = 0;  // 没有房屋时，最大金额为0
    dp[1] = nums[0] // 只有一间房屋时，最大金额为该房屋的金额
    for(let i = 2;i<=nums.length;i++){
        // 到达第i间房屋时可以获得的最大金额可以由到达第i-1间房屋时的最大金额（即dp[i-1]）和
        // 到达第i-2间房屋时的最大金额加上第i间房屋的金额（即dp[i-2]+nums[i-1]）中的较大值得出
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1])
        // 为什么第i间房屋的金额是nums[i-1]? 索引是从0开始的，第i间房屋在数组nums中的索引实际上是i-1
    }
    return dp[nums.length]
}

const rob1 = (nums) => {
    const dp = new Array(nums.length+1).fill(0)
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i = 2;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1])
    }
    return dp[nums.length]
}