/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it 
in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
*/

function setZeroes(matrix) {
    let firstColHasZero = false;
    let firstRowHasZero = false;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[0][i] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    //use first row and column s flags, if rest of cell have zeroes
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }
    //Zero out cells based on flags in first row and column
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    //zero out first colum
    if (firstColHasZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

    //zero first row
    if (firstRowHasZero) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }


}

module.exports = setZeroes;
