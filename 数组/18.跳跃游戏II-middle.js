/*
给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

0 <= j <= nums[i] 
i + j < n
返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

示例 1:
输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

示例 2:
输入: nums = [2,3,0,1,4]
输出: 2
*/ 
var jump = function(nums) {
    let cur = 0,next=0;
    let step = 0;
    // 只需要遍历到数组的倒数第二个元素，检查是否能从这个位置跳跃到最后一个元素。所以是nums.length-1
    for(let i = 0;i<nums.length-1;i++){ 
        // next表示当前最远能跳到的位置                                   
        next = Math.max(next,i+nums[i]);
        // 到达当前最远跳跃位置，说明要跳一次了
        if(i===cur){
            step++;
            // 位置更新为下一次跳跃的最大位置。
            cur = next;
        }
    }
    return step;
};