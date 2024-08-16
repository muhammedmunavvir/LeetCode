/**
 * @param {string} s
 * @return {number}
 */
 var arr=[]
var lengthOfLastWord = function(s) {
//   var arr=s.split(" ")
//   var length=arr[arr.length-1].length

//   return length 
// let count=0; 
// let flag=false;
//   for(var i=s.length-1;i>=0;i--){
//     if(flag==true && s.charAt(i)==' '){
//         return count;
//     }
//     if(s.charAt(i)==' '){
//         continue;
//     }
//     else {
//         count++;
//         flag=true;
//     }
//   }
//   return count;
var arr=s.split(' ');
for(var i=arr.length-1;i>=0;i--){
    if(arr[i].length==0){
        continue;
    }
    else{
        return arr[i].length;
    }
} 
return 0;
};