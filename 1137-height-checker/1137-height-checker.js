/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    count=0;
    sortedList=[...heights].sort((a ,b) => a-b)
    for(let i=0;i<sortedList.length;i++){
       if(sortedList[i]!==heights[i]){
        count++;
       }
    }
    return count;
};