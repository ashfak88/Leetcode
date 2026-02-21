/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    let str=n.toString()
    let num = ""
    for(let i=0;i<str.length;i++){
        if(str[i] !== '0'){
            num+= str[i]
        }
    }
    return Number(num)
};