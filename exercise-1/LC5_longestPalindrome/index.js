//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {

    let maxLength = 1;
    let start = 0;

    let expandCenter = (left,right) => {

        while(left >=0 && right < s.length && s[left] === s[right]) {
            let length = right-left + 1;
            if (length > maxLength) {
                maxLength = length;
                start = left;
            }
            left--;
            right++;


        }
    }
    for (let i = 0; i < s.length;i++) {
        expandCenter(i,i+1);
        expandCenter(i-1,i+1);
    }
    return s.slice(start,start+maxLength);


}



module.exports = longestPalindrome;
