/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at 
coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line 
i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a 
container, such that the container contains the most water.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/


function maxArea(height) {
    /*
    Input: arr of heights
    Output: int , max area

    Steps:
    -Go through array and record left-bound highest height
    -Go through and record right bound highest height
    - Keep track of n distance between left and right bound
    */

    let left = height[0];
    let leftIndex = 0;
    let right = height[1];
    let rightIndex = 1;
    let n = rightIndex-leftIndex;
    let maxArea = 0;

    for (let i = 2; i < height.length; i++) {
        n = rightIndex-leftIndex;
        let area = Math.min(left,right) * n;

        if (area > maxArea) {
            maxArea = area;
        }
        if (height[i] <= left) {
            right = height[i];
            rightIndex = i;
        } 
        
       
    }
}

module.exports = maxArea;
