/*
 * 881. Boats to Save People
 *
 * Q: https://leetcode.com/problems/boats-to-save-people/
 * A: https://leetcode.com/problems/boats-to-save-people/discuss/1014992/Kt-Js-Py3-Cpp-Greedily-Consume-Boats
 */

// concise
let numRescueBoats = (A, K, cnt = 0) => {
    A.sort((a, b) => a - b);
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i <= j) {
        if (i != j && A[i] + A[j] <= K)
            ++i;                         // 🙂 i-th person sometimes fits in the boat ⛵️
        ++cnt, --j;                      // 🙂 j-th person always    fits in the boat ⛵️
    }
    return cnt;                          // 🎯 minimum boat count via 💰 greedy consumption
};

// verbose
let numRescueBoats = (A, K, cnt = 0) => {
    A.sort((a, b) => a - b);
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i <= j)
        if (A[i] + A[j] <= K)            // ⛵️ case 1: both 🙂 i-th and 🙂 j-th person
            ++cnt, ++i, --j;
        else                             // ⛵️ case 2: only 😕 j-th person
            ++cnt, --j;
    return cnt;                          // 🎯 minimum boat count via 💰 greedy consumption
};
