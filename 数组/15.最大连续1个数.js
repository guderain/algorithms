/*
最大连续1个数
给定一个二进制数组， 计算其中最大连续1的个数。

示例 1:
输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
*/

var findMaxConsecutiveOnes = function(nums) {
    // 函数中定义了两个变量 count 和 max，分别表示当前连续的 1 的个数和最大连续的 1 的个数。
    let count = 0, max = 0;
    /*
    遍历nums,如果当前元素是 1，则将 count 加 1，否则将 count 和 max 进行比较，如果 count 大于 max，则将 max 更新为 count，并将 count 重置为 0。
    最后再次比较 count 和 max，更新 max 的值，然后返回 max 即可。
    */ 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
        } else {
            if(count>max){
                max = count
            }
            count = 0;
        }
    }
    // 确保最后一个连续的1序列的长度也被正确地计算在内。
    // 因此，需要在for循环外再次比较一次，并将count重置为0，以便下一次计算。
    if(count>max){
        max = count
    }
    count = 0;
    return max;
};

function findMaxOne(nums1){
    let count = 0,max = 0;
    for(let i = 0;i<nums1.length;i++){
        if(nums1[i]===1){
            count++;
        }else{
            if(count>max){
                max = count
            }
            count = 0;
        }
    }
    if(count>max){
        max = count
    }
}

function findOne(nums){
    let count = 0, max = 0;
    for(let i = 0 ;i<nums.length;i++){
        if(nums[i]===1){
            count++;
        }else{
            if(count>max){
                max = count;
            }
            count = 0;
        }
    }
    if(count>max){
        max = count;
    }
    return max;
}