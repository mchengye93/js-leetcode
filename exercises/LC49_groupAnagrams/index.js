/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

function groupAnagrams(strs) {
    let anagrams = {};

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let letters = strs[i].split('').sort().join('');
    
        if (anagrams[letters] === undefined) {
            anagrams[letters] = [word];
        } else{
            anagrams[letters].push(word);
        }
    }
    let result = [];

    for (let key in anagrams) {
        result.push(anagrams[key]);
    }

    return result;

}

module.exports = groupAnagrams;
