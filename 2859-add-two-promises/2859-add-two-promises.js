/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let sum=0

    await promise1.then((number)=>{
     return  sum=sum+number
    })
     await promise2.then((num)=>{
       sum=sum+num
      
    })
     return sum
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */