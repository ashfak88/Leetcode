/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x.toString();
    let rev = str.split('').reverse().join('');
    let res = parseInt(rev);
    if (res > 2147483647) return 0;  
    
    return x < 0 ? -res : res;      
};