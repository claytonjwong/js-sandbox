/*
 * 1265. Print Immutable Linked List in Reverse
 *
 * Q: https://leetcode.com/problems/print-immutable-linked-list-in-reverse/
 * A: https://leetcode.com/problems/print-immutable-linked-list-in-reverse/discuss/436558/Javascript-Python3-C%2B%2B-1-Liners
 */

let printLinkedListInReverse = head => head ? (printLinkedListInReverse(head.getNext()), head.printValue()) : null;
