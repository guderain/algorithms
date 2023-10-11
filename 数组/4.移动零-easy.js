// 在不复制数组的情况下移动0
// var moveZeroes = function(nums) {
// let len = nums.length
//    for(let i=0;i<len;i++){
//     if(nums[i]==0){
//         nums.splice(i,1);
//         nums.push(0);
//         // 当为0的元素删除后，下一个元素就会前进一位占据该位置，所以要从该位置在进行判断
//         i--;
//         // 当移动到末尾的元素，就不用再一次进行遍历了，所以遍历的长度要减去1位
//         len--;
//     }
//    }
// };
// moveZeroes([0,0,1])

// 双指针解法
var moveZeroes = function(nums) {
    let left=0,right=0
    while(right<nums.length){
        if(nums[right]!==0){//遇上非0元素，交换left和right对应的元素
    /*
    left 指针指向的是当前已经处理好的序列的尾部，而 right 指针指向的是待处理序列的头部。
    当right指针指向的元素不为0时，我们需要将其与left指针指向的元素交换，
    然后left指针向右移动一步，这样就可以保证left指针左边都是非零元素，右边都是零元素。
    而当right指针指向的元素为0时，我们不需要进行交换，因为left指针左边已经是非零元素了，
    只需要让right指针继续向右移动即可。
    */ 
            swap(nums,left,right)
            left++//交换之后left++
        }
        right++
    }
    console.log(nums);
};
function swap(nums,l,r){
    let temp=nums[r] 
    nums[r]=nums[l]  
    nums[l]=temp
}
moveZeroes([1,0,1])



// var moveZeroes = function (nums) {
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {//遇到非0元素，让nums[j] = nums[i]，然后j++
//             nums[j] = nums[i];
//             j++;
//         }
//     }
//     for (let i = j; i < nums.length; i++) {//剩下的元素全是0
//         nums[i] = 0;
//     }
//     return nums;
// };

// 错误
// function moveZero(nums){
//     nums.forEach((item,index)=>{
//         if(item==0){
//             nums.splice(index,1)
//             nums.push(0)
//         }
//     })
//     // [0,1,0]
//     // 第二次迭代没有移动更新后的数组的第一项，
//     // 是因为在第一次迭代中，我们将第一个 0 元素移动到了数组的末尾。
//     // 在第二次迭代时，循环去找索引为1的项，由于数组已经更新，
//     // 所以到达了更新后的数组的第二项，即数字 1。
//     // 由于数字 1不等于 0，因此它不会被移动到数组的末尾。
//     // 因此，更新后的数组的第一项仍然是数字 0，但它现在已经在数组的末尾了。
//     console.log(nums);
// }