/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  const splited= num.split("")
  while(splited.length){
    if(splited[splited.length-1]==0){
        splited.pop()
    }else{
        return splited.join("")
    }
  }

};