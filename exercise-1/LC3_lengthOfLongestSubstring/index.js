// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
 let letters= {};
 let start = 0;
 let maxLength = 0;
 
 for (let i = 0 ; i < s.length; i++) {
     const endChar = s[i];

     //character exists then we update start to be last found char + 1
     if(letters[endChar] >= start) {
         start = letters[endChar] + 1;
     }
     //update letter last found position
     letters[endChar] = i;

     maxLength = Math.max(maxLength, i-start + 1);
 }
 return maxLength;

 
 
}

module.exports = lengthOfLongestSubstring;
