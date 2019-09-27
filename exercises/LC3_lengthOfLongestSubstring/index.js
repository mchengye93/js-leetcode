// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
 let letters= {};


 let longestSubstring = 1;
 let count = 0;
 for (let i = 0; i < s.length;i++) {
     let letter = s[i];
    if (letters[letter] === undefined) {
        letters[letter] = i;
        count++;

        if (count > longestSubstring) {
            longestSubstring = count;
        }
        
    } else {
        count = 1;
        letters = {};
        letters[letter] = i;
    }
 }
 return longestSubstring;
}

module.exports = lengthOfLongestSubstring;
