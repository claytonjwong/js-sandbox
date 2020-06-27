/*
 * 117. Populating Next Right Pointers in Each Node II
 *
 * Q: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 * A: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/discuss/706949/Javascript-and-C%2B%2B-solutions
 */

 let connect = root => {
    let q = root ? [ root ] : [];
    while (q.length) {
        let k = q.length;
        while (k--) {
            let cur = q.shift();
            cur.next = k ? q[0] : null;
            if (cur.left)  q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
    }
    return root;
};
