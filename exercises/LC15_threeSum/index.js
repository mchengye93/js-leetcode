/*
Given an array nums of n integers, are there elements a, b, c in nums such that
 a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/
const threeSum = nums => {
    /*
    Input: int arr
    Output: truples of int that gives 0
    Steps:
    -Take first value, then second, the third 
         -if they sum to 0 then push onto arr result
    */
   let results = [];

    for (let i = 0; i < nums.length; i++) {
        for (let x = i+1; x < nums.length; x++) {
            for(let y = x+1; y < nums.length; y++) {
                let sum = nums[i] + nums[x] + nums[y]
                if (sum === 0) {
                    results.push([nums[i], nums[x] ,nums[y]]);
                }
            }
        }
    }
    return results;
};

module.exports = threeSum;
