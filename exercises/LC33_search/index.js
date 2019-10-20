/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, 
otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/



function findInflectionIdx(rotatedSortedArr) {
    let left = 0;
    let right = rotatedSortedArr.length-1;

    if (rotatedSortedArr.length === 1) {
        return 0;
    }

    //if first is less than last it means it is sorted arr and not rotated
    if(rotatedSortedArr[left] < rotatedSortedArr[right]) {
        return 0;
    }

    while( left <= right ) {
        const mid = Math.floor((left+right)/2);

        //we have a inflection point where left is less than mid
        if (rotatedSortedArr[mid] < rotatedSortedArr[mid-1]) {
            return mid;
        }

        //if current mid is greater than next value then inflection point is next val
        if (rotatedSortedArr[mid] > rotatedSortedArr[mid+1]){
            return mid + 1; 
        }

        if(rotatedSortedArr[mid] < rotatedSortedArr[left]) {
            right = mid-1;
        } else {
            left = mid + 1;
        }
    }
}

function binarySearch(arr,target,left,right) {
    while (left <= right) {
        const mid = Math.floor((left+right)/2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return - 1;
}


function search(nums, target) {
    const minIdx = findInflectionIdx(nums);

    const left = binarySearch(nums,target,0, minIdx- 1);
    const right = binarySearch(nums,target,minIdx,nums.length-1);

    return Math.max(left,right);

}

module.exports = search;
