/* 
link: https://leetcode.com/problems/add-two-numbers
Ref: https://levelup.gitconnected.com/algorithms-with-javascript-add-two-numbers-d297cec0c747

Problem definition: 
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Definition for singly-linked list: 
    function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }

Example: 
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
*/

// Solution (Reference)
var addTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return List.next;
};

//// trial-1
// cause of error: Treated as an array, not a linked list. Below code works as an array.
//     let num1 = toNum(l1);
//     let num2 = toNum(l2);
//     function toNum(arr) {
//         let init = "";
//         for(let i = arr.length - 1; i >= 0; i-- ) {
//             init += String(arr[i])
//         }
//         return Number(init);
//     }

//     let sum = String(num1 + num2);
//     let result = [];

//     for(let i = sum.length - 1; i >= 0; i-- ) {
//         let el = Number(sum[i])
//         result.push(el);
//     }
//     return result;

//// trial-2
// cause of error: Returns node as plain object.
//     let num1 = "";
//     let num2 = "";

//     function getVal(ln, n) {
//         while(ln) {
//             n === 1 ? num1 = String(ln.val) + num1 : num2 = String(ln.val) + num2;
//             ln = ln.next;
//         }
//     }

//     getVal(l1, 1);
//     getVal(l2, 2);

//     let sum = String(Number(num1) + Number(num2));
//     let result = [];

//    for(let i = sum.length; i >= 1; i-- ) {
//        let val = Number(sum[i]);
//        let next = Number(sum[i-1])
//        result.unshift(new ListNode(val, next));
//    }

//     return result;

//// trial-3
// cause of error: Works in most cases. However, sum at Line 117 be like 1e+30, 
// when it's given [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4] as a test case
// resulting in return value as [0,3,NaN,NaN,1]

//    let num1 = "";
//    let num2 = "";

//     function getVal(ln, n) {
//         while(ln !== null) {
//             n === 1 ? num1 = String(ln.val) + num1 : num2 = String(ln.val) + num2;
//             ln = ln.next;
//         }
//     }

//     getVal(l1, 1);
//     getVal(l2, 2);

//     let sum = String(Number(num1) + Number(num2));

// // Iterate through the elements, and create the nodes
//     let arr = Array.from(sum);
//     let head = arr.reduce((nextNode, curr) => {
//         let node = new ListNode(curr);
//         node.next = nextNode;
//         return node;
//     }, null)

// return head;
