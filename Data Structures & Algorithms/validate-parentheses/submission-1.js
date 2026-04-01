class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        //stack to keep track open brackets
        const stack = []
        //loop through each char in str
        for (let i = 0; i < s.length; i++){
            let char = s[i]
            //check if its an open bracket to push onto stack
            if (char === '(' || char === '{' || char === '['){
                stack.push(char)
            }
            else {
               //check if stacks empty = no match = false
                if (stack.length === 0){
                    return false
                }
                let top = stack.pop()
                //check if pop === closing bracket
                if (char === ')' && top !== '(') return false
                if (char === '}' && top !== '{') return false
                if (char === ']' && top !== '[') return false
            }
        }
        //check if stack is empty === match correctly = true
        return stack.length === 0
    }
}
