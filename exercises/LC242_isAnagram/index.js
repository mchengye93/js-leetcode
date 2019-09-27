/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to
 such case?
*/
function isAnagram(s, t) {
    //TimeComplexity: O(n) Space Complexity: O(1) because only 26 chars
    if (s.length !== t.length) {
        return false;
    }
    
    const sCharCount = {};

    for (let i = 0; i < s.length; i++) {
        if (!sCharCount[s[i]]) {
            sCharCount[s[i]] = 1;
        } else {
            sCharCount[s[i]]++;
        }    
    }

    for (let i = 0 ; i < t.length; i++) {
        if(!sCharCount[t[i]]) {
            return false;
        } else {
            sCharCount[t[i]]--;
        }
    }
    return true;

}

module.exports = isAnagram;
