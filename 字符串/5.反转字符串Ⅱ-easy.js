/*
给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

如果剩余字符少于 k 个，则将剩余字符全部反转。
如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

示例 1：
输入：s = "abcdefg", k = 2
输出："bacdfeg"
*/
var reverseStr = function(s, k) {
    const n = s.length;
    // 将字符串转为数组是因为 JavaScript 中的字符串是不可变的，所以需要将字符串转为数组，方便进行修改。
    const arr = Array.from(s);
    // 反转每个下标从 2k 的倍数开始的，长度为 k 的子串。若该子串长度不足 k，则反转整个子串。
    for (let i = 0; i < n; i += 2 * k) {
        // 将数组 arr 中从下标 i即2k 开始的 k 个字符进行翻转，并将翻转后的结果存回 arr 数组中。
        // i + k 是当前子串的结尾下标，但是如果 i + k 大于字符串 s 的长度 n，那么就会越界，因此需要将 i + k 和 n 取最小值，然后再减去 1，得到的就是当前子串的结尾下标。这样就可以保证不越界。
        reverse(arr, i, Math.min(i + k, n) - 1);
    }
    return arr.join('');
};

const reverse = (arr, left, right) => {
    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}