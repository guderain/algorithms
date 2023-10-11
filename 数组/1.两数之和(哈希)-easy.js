// 法一：暴力破解 
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length-1; i++){
//         for(let j = nums.length-1; j > i; j--){
//             if(nums[i]+nums[j]==target){
//                 const arr = [i,j];
//                 return arr;
//             }
//         }
//     }
// };
// twoSum([3,5,4,6],9)

// 法三：双指针 时间复杂度O(n)
// const twoSum = function(nums, target) {
//     // 在 JavaScript 中，Array.sort() 方法会对原始数组进行排序,所以array.slice创建一个新数组来存储排序后的数组
//     const sortedNums = nums.slice().sort((a, b) => a - b);
//     let left = 0;
//     let right = sortedNums.length - 1;
//     while (left < right) {
//         const sum = sortedNums[left] + sortedNums[right];
//       if (sum === target) {
//         const leftIndex = nums.indexOf(sortedNums[left]);
//         const rightIndex = nums.lastIndexOf(sortedNums[right]);
//         return [leftIndex, rightIndex];
//       } else if (sum < target) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//     return [];
//   };

/*
题：给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。
*/  
// 法二：哈希表 时间复杂度O(n) 
function twoSum(arr,target){
    const map = new Map();
    for(let i =0;i<arr.length-1;i++){
        const value = target - arr[i];
        if(map.has(value)){
            return [map.get(value),i]
        }
        // 将当前值作为key，索引作为value存入map
        map.set(arr[i],i)
    }
}

// function twoSum(arr,target){
//     const map = new Map();
//     for(let i = 0;i<arr.length;i++){
//         const value = arr[i]- target;
//         if(map.has(value)){
//             return[map.get(value),i]
//         }
//         map.set(arr[i],i)
//     }
// }
