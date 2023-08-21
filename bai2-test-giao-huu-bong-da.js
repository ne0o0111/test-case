function countWays(x, y) {
    const arr = new Array(x + 1).fill(null).map(() => new Array(y + 1).fill(0));

    arr[0][0] = 1;

    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            if (i > 0) {
                arr[i][j] = (arr[i][j] + arr[i - 1][j]);
            }
            if (j > 0) {
                arr[i][j] = (arr[i][j] + arr[i][j - 1]);
            }
        }
    }

    return arr[x][y];
}

// Read the number of test cases
const numTestCases = parseInt(prompt("Enter the number of test cases:"));
const testCase = [];
// Process each test case
for (let i = 0; i < numTestCases; i++) {
    const input = prompt(`Enter test case ${i + 1} (x y):`).split(" ");
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);
    const ways = countWays(x, y);
    testCase.push(ways);
}

testCase.forEach((item,index) => {
    console.log(`Test case ${index+1}: ${item}`)
})
