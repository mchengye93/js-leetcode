const isValid = s => {
    //Time Complexity: O(n) Space Complexity: O(n)
    let stack = [];

    let hash = {'}': '{', ']': '[', ')': '('};
    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        if(str === '{' || str === '(' || str === '[') {
            stack.push(str);
        } else {
            let pop = stack.pop();
            if (hash[str] !== pop) {
                return false;
            }
            
        }
    }
    return stack.length === 0;
};

module.exports = isValid;
