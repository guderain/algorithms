/*
斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。
该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。
给定 n ，请计算 F(n) 。

示例 1：
输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1

示例 2：
输入：n = 3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2

示例 3：
输入：n = 4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
*/ 

function fib(n){
    let dp = new Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n]
}

// 优化：由于当前元素只记录前两个元素的值，不需要记录整个数组,所以可利用两个变量来记录前两个元素的值，优化时间复杂度
const fib = (n)=>{
    if(n<2) return n;
    let prev = 0, cur = 1;
    for(let i=2;i<=n;i++){
        const sum = prev + cur
        prev = cur;
        cur= sum;
    }
    return cur;
}