/*
给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
返回 k 。

示例 1：
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
*/ 

// 双指针
var removeDuplicates = function(nums) {
    let k = 0; // 记录不重复元素的个数
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[k]) {                                                
        /*
        nums[++k] = nums[i] 是将 nums[i] 的值赋给 nums[k+1]，并将 k 的值加 1。
        这行代码的作用是将不同的元素放在数组的前面，同时返回不同元素的数量。
        因为题目要求我们原地删除重复出现的元素，使每个元素只出现一次，并且元素的相对顺序应该保持一致。
        所以如果是唯一元素，就把该元素到数组的左边。因为k左向右遍历，k之前都排好了，所以放到nums[k+1]上 使相对位置一致
        */    
            nums[++k] = nums[i];
        }
    }
    // 返回的是数量，而不是索引
    return k + 1;
};

function removeDuplicates(nums){
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==nums[k]){
            // 如果相等就不管，k不自增，继续遍历，不相等就把它放到k+1位置。相当于把前面相等的元素删掉了
            // 比如 0 0 1，第一个0和第二个0相等，k不自增，继续遍历，遇到1，把1放到k+1位置，即第二个0的位置，相当于把第一个0删掉了；
            nums[++k] = nums[i]
        }
    }
}

function delRepeat(nums){
    let r = 0,l=0;
    while(r<nums.length){
        if(nums[r]!==nums[l]){
            nums[++l] = nums[r]
        }
        r++
    }
    return l + 1;
}