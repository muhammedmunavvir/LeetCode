/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum=0
  for(let i=0;i<=n;i++){
    if(i%7==0||i%5==0||i%3==0){
        sum=sum+i
    }



  }
   return sum

};