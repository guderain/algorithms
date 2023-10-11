/*
如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
*/ 
var isPalindrome = function(s) {
    // s.replace()方法会返回一个新的字符串，原始字符串s不会被改变
    // ^代表非，[a-z0-9]代表字母数字，g代表全局匹配，i不区分大小写
    let str = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    let left = 0;
    let right = str.length-1
    while(left<=right){
        if(str[left]!==str[right]){
            return false
        };
        left++;
        right--
    }
    return true
};

function isPalindrome(s){
    let str = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let left = 0;
    let right = str.length-1;
    while(left<=right){
        if(str[left]!==str[right]){
            return false
        }
        left++;
        right--
    }
    return true

}