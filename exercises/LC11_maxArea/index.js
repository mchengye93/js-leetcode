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
    -Start with left bound and right bound of the array
    - Check which was is higher and reset lower one
         - Keep calculating area
    */

    let start = 0;
    let end = height.length-1;
    let maxArea = 0;

    while(start < end) {
        let left = height[start];

        let right = height[end];
        let area = Math.min(left,right) * (end-start);

        if (area > maxArea) {
            maxArea  = area;
        }
        if (left < right) {
            start++;
        } else {
            end--;
        }
    }
    return maxArea;

    
}

module.exports = maxArea;
