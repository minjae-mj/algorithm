/* 
link: https://leetcode.com/problems/container-with-most-water
Ref: https://leetcode.com/problems/container-with-most-water/discuss/975586/JavaScript-O(n)-time-solution-that's-easy-to-understand

Problem definition: 
    Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
    Notice that you may not slant the container.

Example: 
    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

// Solution
var maxArea = function (height) {
  // imagine bar graph with index being x-coordinate and the value of index being y-coordinate
  // area = width * height
  // width = difference between indices
  // height = value of height[index]

  let result = 0;

  // get maxArea based on width
  for (let i = 0; i < height.length; i++) {
    for (let j = height.length - 1; j > i; j--) {
      let h = height[i] > height[j] ? height[j] : height[i];
      let area = Math.abs(i - j) * h;
      result = result > area ? result : area;
    }
  }

  return result;
};

// trial-1
// cause of error: Does not consider the case of width being bigger than height and that width is made up of two smaller bars.
// var maxArea = function(height) {
//   let result = 0;

//   let standard = Math.max(...height);
//   let standardIdx = height.indexOf(standard);

//   for(let i = 0; i < height.length; i++) {
//       if(i === standardIdx) {
//           continue;
//       }

//       let area = Math.abs(standardIdx - i) * height[i];
//       result = result > area ? result : area;
//   }

//   return result;
// };

//// reference
// performance wise, below is 23times faster solution.
// const maxArea = (height) => {
// 	let result = 0,
// 		left = 0,
// 		right = height.length - 1;

// 	while (left < right) {
// 		let smallestSide = Math.min(height[left], height[right]);
// 		let area = (right - left) * smallestSide;

// 		if (area > result) result = area;

// 		if (height[left] < height[right]) left++;
// 		else right--;
// 	}

// 	return result;
// };
