/* 
link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
Ref: https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/199006/Javascript-Solution-96.10

Problem definition: 
    Given a string s, find the length of the longest substring without repeating characters.

Example: 
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// Solution
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }

  // check if all elements equal to s[0]
  let checkedArr = s.split("").filter((el) => el === s[0]);
  if (checkedArr.length === s.length) {
    return 1;
  }

  // make substring instances. substring ends when it meets the first letter again or it already has same characters.
  let substrArr = [];
  for (let i = 0; i < s.length - 1; i++) {
    let str = "";

    for (let j = i + 1; j < s.length; j++) {
      if (s[i] !== s[j] && !str.includes(s[j])) {
        str += s[j];
        let substrLeng = (s[i] + str).length;
        substrArr.push(substrLeng);
      } else {
        break;
      }
    }
  }

  return Math.max(...substrArr);
};

//// trial-1
// cause of error: higher order function such as filter, map, reduce is expensive.
// As I've used all of them, leetcode showed an error of "javascript heap out of memory".
// In next trial, I've assinged length of substrig directly to substrArr
// and eliminated map function at Line 84. (hence, Solution)

// var lengthOfLongestSubstring = function(s) {
//     if(!s.length) {
//         return 0;
//     }

//     // check if all elements equal to s[0]
//     let checkedArr = s.split("").filter(el => el === s[0]);
//     if(checkedArr.length === s.length) {
//         return 1;
//     }

//     // make substring instances. substring ends when it meets the first letter again or it already has same characters.
//     let substrArr = [];
//     for(let i = 0; i < s.length - 1; i++) {
//         let str = "";

//         for(let j = i + 1; j < s.length; j++) {
//             if (s[i] !== s[j] && !str.includes(s[j])) {
//                 str += s[j];
//                 let substr = (s[i] + str);
//                 substrArr.push(substr);
//             } else {
//                 break;
//             }
//         }
//     }

//     // find longest substr from substrArr.
//     let substrLeng = substrArr.map(el => el.length);

//     return Math.max(...substrLeng);
// };

//// reference
// performance wise, below code is 5 times faster and uses half of the memory compared to my solution.
// const lengthOfLongestSubstring = function(s) {
//     let longestStr = '';
//     let currentStr = '';

//     for(let i = 0; i < s.length; i++) {
//       let letter = s[i];
//       let index = currentStr.indexOf(letter);

//       if(index > -1) {
//         if(currentStr.length > longestStr.length) longestStr = currentStr;
//         currentStr = currentStr.slice(index + 1) + letter;
//       }
//       else {
//         currentStr += letter;
//       }
//     }
//     if(currentStr.length > longestStr.length) longestStr = currentStr;

//     return longestStr.length;
// }
