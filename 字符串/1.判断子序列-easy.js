/*
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
*/ 
var isSubquence = function(s,t){
    // 空字符串是任何字符串的子序列
    if(s.length== '0') return true;
    // 双指针
    let tI = 0;
    let sI = 0;
    // 遍历主串
    while(tI<t.length){
        // 如果两个字符串的当前位置的字符相等，则将子串指针移动到下一个字符，继续与主串匹配
        if(s[sI]===t[tI]){
            sI++;
        }
        // 如果subIndex等于或大于subStr长度减1（表示已匹配所有字符），则函数立即返回true，表示subStr确实是str的子序列。
        if(sI>s.length-1){
            true
        }
        tI++;
    }
    return false
}

function isSubquence(sub,main){
    if(sub.length=='0') return true
    let subIndex = 0;
    let mainIndex = 0;
    // 遍历主串
    while(mainIndex<main.length){
        if(sub[subIndex]===main[mainIndex]){
            subIndex++;
        }
        // 如果subIndex等于或大于subStr长度减1（表示subIndex指针一直往右移动，全匹配上了），
        // 则函数立即返回true，表示subStr确实是str的子序列。
        if(subIndex>sub.length-1){
            return true
        }
        mainIndex++;
    }
    return false
}