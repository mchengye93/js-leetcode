const isValid = s => {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        if(str === '{' || str === '(' || str === '[') {
            stack.push(str);
        } else {
            let pop = stack.pop();
            if (str === '}' && pop !== '{') {
                return false;
            } 

            if (str === ')' && pop !== '(') {
                return false
            }

            if (str === ']' && pop !== '[') {
                return false;
            }
            
        }
    }
    return stack.length === 0;
};

module.exports = isValid;
