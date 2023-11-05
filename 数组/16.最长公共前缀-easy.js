/*
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
*/ 
var longestCommonPrefix = function(strs) {
    if(!strs || strs.length==0) return '';
    if(strs.length == 1) return strs[0];
    let tmp = strs[0]
    for(let i = 1;i<strs.length;i++){
        let j = 0;
        for(;j<tmp.length && j<strs[i].length;j++){
            if(tmp[j]!=strs[i][j]) break;
        }
        tmp = tmp.slice(0,j)
    }
    return tmp
};

function longestCommonPrefix(strs){
    if(!strs|| strs.length===0) return '';
    if(strs.length==1) return strs[0];
    let tmp = strs[0];
    for(let i = 0;i<strs.length;i++){
        let j = 0;
        for(;j<tmp.length && j<strs[i].length;j++){
            if(tmp[j]!==strs[i][j]) break;
        }
        tmp = tmp.slice(0,j)
    }
    return tmp
}