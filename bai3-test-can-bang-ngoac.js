function isBalanced(str) {
    const stack = [];
    const openingBrackets = ['{', '[', '('];
    const closingBrackets = ['}', ']', ')'];
    const bracketPairs = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    
    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.length === 0 || stack[stack.length - 1] !== bracketPairs[char]) {
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
}

const numTestCases = parseInt(prompt("Enter the number of test cases:"));
const testCase = [];
// Process each test case
for (let i = 0; i < numTestCases; i++) {
    const input = prompt(`Enter test case ${i + 1}:`).split(" ");
    const result = isBalanced(input)
    testCase.push(result);
}

testCase.forEach((item,index) => {
    console.log(`Test case ${index+1}: ${item}`)
})
