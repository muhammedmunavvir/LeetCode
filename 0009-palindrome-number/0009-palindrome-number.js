/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    str=x.toString()
    reversed=str.split("").reverse().join("")
    return reversed===str
};