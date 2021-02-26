/* 
link: https://programmers.co.kr/learn/courses/30/lessons/68644
Ref: https://programmers.co.kr/learn/courses/30/lessons/68644/solution_groups?language=javascript

Problem definition: 
    [두 개 뽑아서 더하기]
    정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

    [제한사항]
    numbers의 길이는 2 이상 100 이하입니다.
    numbers의 모든 수는 0 이상 100 이하입니다.

Example: 
    Input: [2,1,3,4,1]
    Output: [2,3,4,5,6,7]
*/

// Solution
function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) {
        result.push(sum);
      }
    }
  }

  return result.sort((a, b) => a - b);
}

//// reference
// 기본적으로 나와 풀이법이 비슷한데, 배열 내 중복 요소 검사를 위해 Set 을 쓴 점이 매우 인상적이었다.
// 1. 중복 요소가 있는 배열을
// 2. Set 에 담은 후, (Set 은 객체)
// 3. 빈 배열 안에 전개문법으로 풀어서 새로운 변수에 할당

// function solution(numbers) {
//   const sum = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       sum.push(numbers[i] + numbers[j]);
//     }
//   }

//   const answer = [...new Set(sum)];

//   return answer.sort((a, b) => a - b);
// }
