/*
 * Combination Sum III
 *
 * Q: https://leetcode.com/problems/combination-sum-iii/
 * A: https://leetcode.com/problems/combination-sum-iii/discuss/843173/Javascript-Python3-C%2B%2B-DFS-%2B-BT-solutions
 */

let combinationSum3 = (N, T, paths = []) => {
    let go = (n = N, t = T, path = []) => {
        if (!n && !t) {
            paths.push([...path]);   // 🎯 unique path of N nums with T sum 👀 seen once
            return;
        }
        if (!n || !t)
            return;
        for (let i = path.length ? path[path.length - 1] + 1 : 1; i < 10 && 0 <= t - i; ++i) {
            path.push(i);            // 👀 ✅ forward-tracking
            go(n - 1, t - i, path);  // 🚀 recursively explore path
            path.pop();              // 👀 🚫 back-tracking
        }
        return paths;
    };
    return go();
};
