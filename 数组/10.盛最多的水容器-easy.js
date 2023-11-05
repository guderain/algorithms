/*
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
返回容器可以储存的最大水量。

示例1：
输入：[1,8,6,2,5,4,8,3,7]
输出：49    8*7=49（木桶理论，按最短的来算，8只能算到7）
*/ 
// 双指针
var maxArea = function(height) {
    let maxArea = 0;
    let right = height.length-1;
    let left = 0;
    // 计算出每次移动后的面积，取最大值
    for(let i =0;i<height.length;i++){
        const width = right-left;
        const minHeight = height[left]<height[right]?height[left++]:height[right--];
        const area = width*minHeight;
        maxArea = Math.max(maxArea,area)
    }
    return maxArea;
};

const maxArea = (height)=>{
    let maxArea = 0;
    let r = height.length-1,l=0;
    for(let i=0;i<height.length;i++){
        const width = r-i;
        const height = height[l]<height[r]?height[l++]:height[r--];
        maxArea = Math.max(maxArea,width*height)
    }
    return maxArea;
}

function maxArea(h){
    let max = 0;
    let r = h.length-1, l = 0;
    for(let i=0;i<=r;i++){
        const width = r-l;
        const height = h[l]<h[r]?h[l++]:h[r--];
        const max = Math.max(max,width*height)
    }
    return max;
}

// 错误解法：只考虑了左边界向右移动，没有考虑右边界向左移动。
// function maxWater(h){
//     let l=0,r=h.length-1;
//     let maxArea = 0;
//     // 错误地方：只考虑了左边界向右移动，没有考虑右边界向左移动。
//     // 右边界始终保持在数组的最后一个元素上。因此，计算的最大面积可能会受到右边界位置的限制。
//     while(l<=r){
//         const width = r - l;
//         const height = h[l];
//         maxArea = Math.max(maxArea,width * height);
//         l++;
//     }
//     return maxArea;
// }
