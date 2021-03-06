/* 
link: https://leetcode.com/problems/longest-palindromic-substring/
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
var longestPalindrome = function (s) {
  var max = "";
  for (var i = 0; i < s.length; i++) {
    // this loop is to take into account
    // different palindromes like 'aba' and 'abba'
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};

// trial-1
// cause of error: reverse() method mutates original array.
// var longestPalindrome = function(s) {
//     let currentStr = "";

//     for(let i = 0; i < s.length; i++) {
//         let letter = s[i];
//         let arr = Array.from(currentStr + letter);

//         if(arr.reverse() === arr) {
//             let str = arr.join("");
//             currentStr = str
//         } else {
//             currentStr += letter
//         }
//     }

//     return currentStr;
// };

// trial-2
// cause of error: array in javascript is reference type as opposed to primitive type.
// Line 79 and line 80 are different variables, meaning they are pointing different references.
// Thus, Line 82 will always be false.

// var longestPalindrome = function(s) {
//     let longestStr = "";
//     let currentStr = "";

//     for(let i = 0; i < s.length; i++) {
//         let letter = s[i];
//         let arr = Array.from(currentStr + letter);
//         let reversedArr = arr.slice().reverse();

//         if(reversedArr === arr) {
//             let str = arr.join("");
//             console.log(str);
//             longestStr = str;
//         } else {
//             currentStr += letter
//         }
//     }

//     return longestStr;
// };

// trial-3
// cause of error: Time Limit Exceeded
// var longestPalindrome = function(s) {
//     let longestStr = "";
//     let currentStr = "";
//     let count = 0;

//     while(count < s.length) {
//         for(let i = count; i < s.length; i++) {
//             let letter = s[i];
//             let arr = Array.from(currentStr, letter);
//             let reversedArr = arr.slice().reverse();

//             if(reversedArr.toString() === arr.toString()) {
//                 let str = arr.join("");
//                 currentStr = str;

//                 if (longestStr.length < str.length) {
//                     longestStr = currentStr;
//                 }

//             } else {
//                 currentStr += letter
//             }
//         }

//         currentStr = "";
//         count += 1;
//     }

//     return longestStr;
// };

// trial-4
// cause of error: Time Limit Exceeded
// even after seperating function (makeRversedStr())
// to not covert to array just for reverse().

// var longestPalindrome = function (s) {
//   let longestStr = "";
//   let currentStr = "";
//   let count = 0;

//   function makeRversedStr(str) {
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       result += str[i];
//     }
//     return result;
//   }

//   while (count < s.length) {
//     for (let i = count; i < s.length; i++) {
//       let letter = s[i];
//       let newStr = currentStr + letter;
//       let reversedStr = makeRversedStr(newStr);

//       if (newStr === reversedStr) {
//         currentStr = newStr;
//         if (longestStr.length < newStr.length) {
//           longestStr = newStr;
//         }
//       } else {
//         currentStr += letter;
//       }
//     }

//     currentStr = "";
//     count += 1;
//   }

//   return longestStr;
// };
