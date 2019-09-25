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
    Input: Arr of int
    Output: Arr of truples, sum = 0

    Steps: 
    -Sort arr
    -Have left and right pointer and mid moves accordingly
         - if 
    */
    nums.sort((a,b) => a-b);
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length-1;

        //if nums are the same the skips to next number
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        //keep looping left and right if they are different
        while (left < right ) {

            //if left and right gives us target then we can push result
            if (nums[left] + nums[right] === target) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                //if next left is same skip until it is different
                while(nums[left] === nums[left-1]) {
                    left++;
                }

            } else if ( nums[left] + nums[right] < target) {
                left++;
            } else {
                right--;
            }
        }

    }
    return result;
};

module.exports = threeSum;
/*
  /*
    Input: int arr
    Output: truples of int that gives 0
    Steps: O(N^3)
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
*/