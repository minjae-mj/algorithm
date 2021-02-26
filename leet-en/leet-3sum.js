/* 
link: https://leetcode.com/problems/3sum
Ref: https://leetcode.com/problems/3sum/discuss/691287/JavaScript-Clean-Solution

Problem definition: 
    Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
    Notice that the solution set must not contain duplicate triplets.

Example: 
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]  
*/

// Solution (Reference)
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1,
      high = nums.length - 1,
      sum = 0;

    while (low < high) {
      sum = nums[i] + nums[low] + nums[high];

      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);
        while (nums[low + 1] === nums[low]) low++;
        while (nums[high - 1] === nums[high]) high--;
        low++;
        high--;
      } else if (sum < 0) low++;
      else high--;
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;
};

// trial-1
// cause of error: Time Limit Exceeded
// Though not passed the test, there were some discoveries.
// 1) new way to compare two arrays using every(). See line 64.
// 2) "break" will immeidately stop the for loop, whereas "continue" just skip the subject and head to the next.
// 3) note: even if it's the "break" case, console.log('test') at line 69 will be executed.

// var threeSum = function(nums) {
//     let result = [];

//     if(nums.length < 3 ) return result;

//     for(let i = 0; i < nums.length - 2; i++) {
//         for(let j = i+ 1; j < nums.length - 1; j++) {
//             for(let k = j + 1; k < nums.length; k++) {
//                 let sum = nums[i] + nums[j] + nums[k];

//                 if(sum === 0) {
//                     let triplet = [].concat(nums[i], nums[j], nums[k]).sort((a, b) => a - b);
//                     let hasEqual = false;
//                     if(!result.length) result.push(triplet);

//                     for(let r = 0; r < result.length; r++) {
//                         if (result[r].every((value, idx) => value === triplet[idx])) {
//                             hasEqual =true;
//                             break;
//                         }

//                         console.log('test');
//                     }

//                     if(!hasEqual) {
//                          result.push(triplet);
//                     }
//                 }
//             }
//         }
//     }

//     return result;
// };
