/*
给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
返回该 最大总和 。

示例 1：
输入：nums = [6,2,6,5,1,2]
输出：9
解释：最优的分法为 (2, 1), (2, 5), (6, 6). 
min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9
*/ 

var arrayPairSum = function(nums) {
   let sum = 0;
    nums.sort((a,b)=>a-b);
    for(let i = 0;i<nums.length;i+=2){
        sum += nums[i];
    }
    return sum;
};

function arrPairSum (nums){
    let sum = 0;
    nums.sort((a,b)=>a-b);
    for(let i =0;i<nums.length;i+=2){
        sum = sum + nums[i];
    }
    return sum;
}