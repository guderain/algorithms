/*
给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
*/ 
// 滑动窗口
function minArray(target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLen = Infinity;

    // 右指针不断向右移动 并把值加到sum中
    while (right < nums.length) {
        sum += nums[right];
        // 当sum大于target时，就要左指针向右移动，即缩小滑动窗口。并把值从sum中减去
        while (sum >= target) {
            // right - left + 1是当前子数组的长度，每次指针移动都要更新最小长度
            minLen = Math.min(minLen, right - left + 1);
            // 减去左指针的值是因为左指针是当前子数组的起始位置，如果不减去左指针的值，那么子数组的长度就会大于等于 target。
            // 而我们需要找到小的子数组，所以需要不断移动左端点，直到当前子数组的和小于目标值 target。
            sum -= nums[left];
            left++;
        }
        right++;
    }

    return minLen === Infinity ? 0 : minLen;
}

// 滑动窗口 思想就是先找到符合条件的再不断优化
var minParam = function(target,arr){
    let left = 0,right=0;
    let sum = 0;
    let minLen = Infinity;

    while(right<arr.length){
        sum = arr[right] + sum;
        // 这里如果用if就不是最优结果了
        while(sum>=target){
            minLen = Math.min(minLen,right-left+1)
            sum = sum - arr[left]
            left++;
        }
        right++;
    }
    return minLen === Infinity ? 0 : minLen;
}