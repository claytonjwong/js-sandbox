/*
 * 15. 3Sum
 *
 * Q: https://leetcode.com/problems/3sum/
 * A: https://leetcode.com/problems/3sum/discuss/725733/Javascript-and-C%2B%2B-solutions
 */

let threeSum = (A, ans = []) => {
    A.sort((a, b) => a - b);
    let N = A.length,
        i = 0;
    while (i + 2 < N) { // +2 to make room for j and k
        let j = i + 1,
            k = N - 1;
        while (j < k) { // ⭐️ 2sum window [ j ... k ]
            let sum = A[i] + A[j] + A[k];
            if (sum == 0) ans.push([ A[i], A[j], A[k] ]); // 🎯 3sum target
            if (sum <= 0) do { ++j; } while (A[j] == A[j - 1] && j < k); // shrink 2sum window: [ j 👉 ... k ] 🚫 skip duplicate j
            if (0 <= sum) do { --k; } while (A[k] == A[k + 1] && j < k); // shrink 2sum window: [ j ... 👈 k ] 🚫 skip duplicate k
        }
        do { ++i; } while (A[i - 1] == A[i] && i + 2 < N); // 🚫 skip duplicate i
    }
    return ans;
};
let ans = threeSum([-1, 0, 1, 2, -1, -4]);
for (let row of ans)
    console.log(...row);