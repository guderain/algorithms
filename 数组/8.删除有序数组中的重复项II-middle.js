/*
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例 1：

输入：nums = [1,1,1,2,2,3]
输出：5, nums = [1,1,2,2,3]
解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。
*/ 

var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    let s = 2; // 既是慢指针 也记录重复小于3次的元素的个数
    // 有序 重复超过两次删，从第三个元素开始遍历
    for(let i =2 ;i<nums.length;i++){
        if(nums[i] !== nums[s-2]){
            nums[s] = nums[i]
            s++
        }
    }
    return s
}