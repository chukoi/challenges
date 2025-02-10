/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
    // Your code goes here
    var indices = new Map();
    for (var i = 0; i < numbers.length; i++) {
        var n = sum - numbers[i];
        if (indices.has(n)) {
            return [i, indices.get(n)];
        }
        indices.set(numbers[i], i);
    }
    return null;
}
var indices = findTwoSum([3, 1, 5, 7, 5, 9], 10);
console.log(indices);
