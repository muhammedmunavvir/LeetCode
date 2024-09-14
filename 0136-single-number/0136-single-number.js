/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result=0;
  for(let value of nums){
    result ^=value
  }
  return result
};