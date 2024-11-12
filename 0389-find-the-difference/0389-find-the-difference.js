/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

 let   result=0

 for(let value of s+t) {
   
      result ^= value.charCodeAt(0)

  
 } 
   return String.fromCharCode(result)
};