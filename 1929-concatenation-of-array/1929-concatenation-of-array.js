/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    const stack = []
    for (i = 0; i < nums.length; i++) {
        stack.push(nums[i])
    }
     for ( i = 0; i < nums.length; i++) {
        stack.push(nums[i])
    }
return stack;
};