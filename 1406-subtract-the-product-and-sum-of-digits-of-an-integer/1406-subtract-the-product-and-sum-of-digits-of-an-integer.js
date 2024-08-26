/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let numbers=n.toString().split("")

    let digits= numbers.map(num =>parseInt(num))

    let product= digits.reduce((acc,cur)=>acc*cur,1)
    let sum= digits.reduce((acc,cur)=>acc+cur,0)

    return product-sum;

};