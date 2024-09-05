/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splited = s.split(" ");
    let result = splited.map(word => word.split("").reverse().join("")).join(" ");
    return result;
};
