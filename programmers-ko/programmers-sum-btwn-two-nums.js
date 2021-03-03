/* 
link: https://programmers.co.kr/learn/courses/30/lessons/12912

Problem definition: 
    [두 정수 사이의 합]
    두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
    예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

    [제한사항]
    a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
    a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
    a와 b의 대소관계는 정해져있지 않습니다.

Example: 
    Input: 3, 5
    Output: 12

    Input: 3, 3
    Output: 3 
*/

// Solution
function solution(a, b) {
  let result = 0;
  let small = a > b ? b : a;
  let big = a > b ? a : b;

  for (let i = small; i <= big; i++) {
    result += i;
  }

  return result;
}

//// Reference
// 가우스 등차수열의 합이라고 한다. 깜짝 놀랐다.

// function adder(a, b) {
//   return ((a + b) * (Math.abs(b - a) + 1)) / 2;
// }
