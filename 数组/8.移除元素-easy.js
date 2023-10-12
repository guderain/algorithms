/*
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1：
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
*/ 

// 双指针
function removeElement(nums,val){
    let k = 0;
    for(let i =0;i<nums.length;i++){
        if(nums[i]!==val){
            // 刚开始没有重复项，相当于把值在原地再插一次，k再右移一位
            // 如果遍历中有重复项，因为有重复项时k不右移，再遍历到无重复项时把它放到k位置就相当于把前面的重复项删掉了
            nums[k++] = nums[i]
        }
    }
    return k 
}

var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[k++] = nums[i]
        }
    }
    return k;
};