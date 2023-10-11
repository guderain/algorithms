/*
题目: 三数之和(双指针)
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 
i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
你返回所有和为 0 且不重复的三元组。
答案中不可以包含重复的三元组。
*/ 

// 双指针
var threeSum = function(nums) {
    let ans = [];
    const len = nums.length;
    if(nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        // 如果当前值大于0，因数组已排过序了，之后的值都大于0，所以不可能相加等于0,跳过
        // break是跳出循环体，continue是跳过当前循环，进入下一次循环
        if(nums[i] > 0) break; 
        // 如果当前值和前一个值相同，说明已经遍历过了，直接跳过循环
        if(i > 0 && nums[i] == nums[i-1]) continue; 
        // 从当前值开始，左指针为当前值的下一个，右指针为数组最后一个
        let L = i+1;
        let R = len-1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                // 在找到一个符合条件的三元组之后，如果左指针和右指针分别停留在相同的数字上，
                // 那么它们下一次循环中仍然会找到相同的三元组，
                // 因此需要将左指针 L 移动到下一个不同的数字上，以避免找到重复的三元组。
                while (L<R && nums[L] == nums[L+1]) L++; 
                // L 是在不断自增的，如果只判断 nums[L] == nums[L+1]，
                // 那么可能会出现 L+1 超出数组索引范围的情况,所以要确保L<R
                while (L<R && nums[R] == nums[R-1]) R--; 
                // 在找到一个符合条件的三元组之后，左指针 L 会向右移动，而右指针 R 也会向左移动，
                // 这样下一次循环中的左指针和右指针就不会落在上一次循环中已经使用过的数字上了。所以是L++，R--
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }        
    return ans;
};
threeSum([-1,0,1,2,-1,-4]);

function threeSum(params) {
    let ans = []
    let len = params.length
    // 因为是找三个数，所以数组长度必须大于等于3
    if(params = null || len < 3) return ans
    // 排序
    params.sort((a, b) => a - b)
    for(let i = 0; i<len;i++){
        // 如果当前值大于0，因数组已排过序了，之后的值都大于0，所以不可能相加等于0
        if(params[i]>0) break;
        // 如果当前值和前一个值相同，说明已经找过了，直接跳过循环
        if(i>0 && params[i]===params[i-1]) continue;
        // 从当前值开始，左指针为当前值的下一个，右指针为数组最后一个
        let L = i+1;
        let R = len-1;
        while(L<R){
            const sum = params[i] + params[L] + params[R]
            if(sum === 0){
                ans.push([params[i],params[L],params[R]])
                // L 是在不断自增的，如果只判断 nums[L] == nums[L+1]，
                // 那么可能会出现 L+1 超出数组索引范围的情况,所以要确保L<R
                if(L<R && params[L]===params[L+1]) L++;
                if(L<R && params[R]===params[R-1]) R--;
                L++;
                R--;
            }
        }
    }
};

function three(nums){
    const arr = []
    if(nums = null || nums.length<3) return arr
    nums.srot((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0) break;
        if(nums[i]===nums[i-1])continue;
        let l  = i + 1;
        let r = nums.length - 1;
        const sum = nums[i]+nums[l]+nums[r];
        if(sum===0){
            arr.push([nums[i],nums[l],nums[r]])
            // 如果左指针和右指针分别停留在相同的数字上 
            // 则下次循环还会找到相同的三元组，所以要将指针移到下一个不同的数字上
            if(l<r && nums[l]===nums[l+1])l++;
            if(l<r && nums[r]==nums[r-1])r--;
            l++;
            r--;
        }
    }
}

function sumThree(arr){
    if(arr,length<3) return [];
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0)break;
        if(i>0&&arr[i]===arr[i-1]) continue;
        let l = i+1;
        let r = arr.length-1;
        while(l<r){
            const sum = arr[i]+arr[l]+arr[r];
            if(sum===0){
                const param = [];
                param.push(arr[i],arr[l],arr[r]);
                if(l<r&&arr[l]===arr[l+1])l++;
                if(r>l&&arr[r]===arr[r-1])r--;
                l++;
                r--;
            }else if(sum>0) r--;
            else if(sum<0) l++;
        }
    }
}

function sumThreee(arr){
    const ans = []
    const len = arr.length
    if(arr==null||len<3) return ans
    arr.sort((a,b)=>a-b)
    for(let i =0;i<=len-1;i++){
        if(arr[i]>0) break;
        if(arr[i]===arr[i-1]) continue;
        let l=i+1;
        let r = len-1;
        while(l<r){
            const sum = arr[i]+arr[l] + arr[r];
            if(sum===0){
                ans.push([arr[i],arr[l],arr[r]])
                // 如果停留在的数字一样，则下次遍历会找到相同的三元组，
                // 所以要移动指针到下一个不同的数字上
                if(l<r&&arr[l]===arr[l+1]) l++;
                if(l<r&&arr[r]===arr[r-1]) r--;
                l++;
                r--;
            }
            else if(sum>0)r--;
            else if(sum<0)l++;
        }
    }
}






















