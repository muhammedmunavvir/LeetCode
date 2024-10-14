/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
      const arr=[]

      words.forEach((word,index)=>{
        if(word.includes(x))
         arr.push(index)
      })
      return arr
};