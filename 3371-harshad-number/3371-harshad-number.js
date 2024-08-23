/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum=0
    n=x.toString()
   let splited=n.split("")
   for( let i=0;i<splited.length;i++){
     sum+=Number(splited[i])
   }
   if(x%sum==0){
    return sum
   }else{
    return -1
   }
   
};