/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack.includes(needle)) {
        const index = haystack.indexOf(needle)
        return index
    } else {
        return -1
    }
};