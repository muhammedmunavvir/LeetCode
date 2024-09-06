/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 res=s.toLowerCase().replace(/[^a-z0-9]/g, '')
 rev=res.split("").reverse().join("")
 return res===rev

 

};