/*
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
示例 1：
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
*/ 

function reverseStr(s){
    let left = 0;
    let right = s.length-1;
    while(left<right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp
        left++;
        right--
    }
}