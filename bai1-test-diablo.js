function calculateMinGold(m, d, k, c) {
    if (d < k) return -1;
    return Math.floor(m * k / d) * c;
}

const input = prompt("Enter m, d, k, c (separated by spaces):").split(" ");
const m = parseInt(input[0]);
const d = parseInt(input[1]);
const k = parseInt(input[2]);
const c = parseInt(input[3]);

const minGold = calculateMinGold(m, d, k, c);
console.log(minGold);