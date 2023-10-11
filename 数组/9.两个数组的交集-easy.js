/*
给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
*/ 
// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。
var intersection = function(nums1, nums2) {
    let q = 0,p=0;
    let ans = [];
    while(q<nums1.length){
        while(p<nums2.length){
            if(nums1[q]===nums2[p]){
                ans.push(nums1[q]);
                break;
            }
            p++;
        }
        q++;
        // 因为p是在内层循环中自增的，即p遍历了nums2和nums1的第一个元素比较，所以跳除内存循环时p在nums2的末尾
        // 所以要重置p
        p=0;
    }
    const ansSet = new Set(ans);
    // 题目要求输出数组，所以将 Set 对象转换为数组。
    return Array.from(ansSet);
};