// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]

function twoSum(arr, target) {
    /*
    Input: Array of numbers and target
    Output: Indices of two numbers

    Steps: Time: O(N*(N-1)) = O(N^2), Space: O(1)
      - Go through all possible pairs 
          - If found a pair then return

    Assumptions: There will always be a pair

    */
   for (let i = 0; i < arr.length; i++) {
       for (let x = i+1; x < arr.length; x++) {
           if (arr[i]+arr[x] === target) return [i,x];
       }
   }
   return -1;

}

module.exports = twoSum;
