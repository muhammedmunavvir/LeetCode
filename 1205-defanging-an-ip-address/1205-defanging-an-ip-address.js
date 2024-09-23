/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
 const res=address.replaceAll(".","[.]")
   
// let res=[] 
//    for( let i=0;i<address.length;i++){
//     if(address[i]==="."){
//        res +=["."]
//     }else 
//        res +=address[i]
//    }
    
 return res
};