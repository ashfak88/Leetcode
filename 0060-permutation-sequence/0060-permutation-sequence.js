/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let numbers = [];
    let factorial = 1;

    // prepare numbers and factorial
    for (let i = 1; i < n; i++) {
        factorial *= i;
        numbers.push(i);
    }
    numbers.push(n);

    k = k - 1; // convert to 0-based
    let result = "";

    for (let i = n; i > 0; i--) {
        let index = Math.floor(k / factorial);
        result += numbers[index];
        numbers.splice(index, 1);

        k = k % factorial;
        factorial = Math.floor(factorial / (i - 1)) || 1;
    }

    return result;
};