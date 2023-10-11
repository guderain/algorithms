// 方法一：直接合并排序(不推荐)
// var merge = function(nums1, m, nums2, n) {
//     // m是起始位置，nums1.length - m是删除的个数，...nums2是插入的元素
//     nums1.splice(m, nums1.length - m, ...nums2);
//     nums1.sort((a, b) => a - b);
// };
// merge([1,2,3,0,0,0],3,[2,5,6],3)

// 逆向双指针(推荐)
var merge = function(nums1,m,nums2,n){
    let p1 = m-1;
    let p2 = n-1;
    var cur;
    for(let i = m+n-1;i>=0;i--){
        if(nums1[p1]>nums2[p2]){
            cur = nums1[p1--];//先赋值再自减
        }else if(p1<0){
            cur = nums2[p2--];
        }else if(p2<0){
            cur = nums1[p1--];
        }else{
            // 将nums1 [ p1 ] < nums2 [ p2 ]以及 nums1 [ p1 ] === nums2 [ p2 ]的情况合并到一起
            // 原因：合并后数组不应由函数返回，而是存储在数组 nums1 中，故nums1较长，为m+n,末尾都是0
            // 因此可以将nums2[p2]这个元素放到nums1的末尾而不会覆盖掉nums1[p1]的值。因此，这两种情况可以合并到一起处理。
            cur = nums2[p2--];
        }
        nums1[i] = cur;
    }
}

function merge(arr1,m,arr2,n){
    let p1 = m-1;
    let p2 = n-1;
    let cur;
    for(let i = m+n-1; i>=0; i--){
        if(arr1[p1]>arr2[p2]){
            cur = arr1[p1--];
        }else if(p1<0){
            cur = arr2[p2--];
        }else if(p2<0){
            cur = arr1[p1--];
        }else{
            cur = arr2[p2--]
        }
        arr1[i] = cur;
    }
}

function merge1(arr1,m,arr2,n){
    let p1 = m-1;
    let p2 = n-1;
    for(let i= m+n-1;i>=0;i--){
        if(arr1[p1]>=arr2[p2]){
            arr1[i] = arr1[p1--];
        }else if(p1<0){
            arr1[i] = arr2[p2--];
        }else if(p2<0){
            arr1[i] = arr1[p1--];
        }else{
            arr1[i] = arr2[p2--];
        }
    }
}

function merge2(arr1,m,arr2,n){
    let p1 = m-1;
    let p2 = n-1;
    var cur;
    for(let i = m+n-1;i>=0;i++){
        if(arr1[p1]>arr2[p2]){
            cur = arr1[p1--]
        }else if(arr2[p2]>arr1[p1]){
            cur = arr2[p2--]
        }else if(p1<0){
            cur = arr2[p2--]
        }else if(p2<0){
            cur = arr1[p1--]
        }
        arr1[i]=cur;
    }
}