/* 
Ref: https://velog.io/@minjae-mj/Memoization-%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98-feat.-%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98-%EC%88%98%EC%97%B4

Problem definition: 
    [피보나치]
    아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.
    0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

    [제한사항]
    재귀함수를 이용해 구현해야 합니다.
    반복문(for, while) 사용은 금지됩니다.
    함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.

    입력: number 타입의 n (n은 0 이상의 정수)
    출력: number 타입을 리턴해야합니다.

Example: 
    Input: 9
    Output: 34
*/

// Solution (Reference)
let fibonacci = function (n) {
  const memo = [0, 1];

  const aux = (n) => {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = aux(n - 1) + aux(n - 2);

    return memo[n];
  };

  return aux(n);
};

// trial-1
// Naive Solution. 가장 기초적인 재귀함수로, 로직은 정확하지만
// O(2^n) 시간 효율을 가져 테스트 실행 시간을 초과한다.
// fibo(10)
// = fibo(9) + fibo(8)
// = fibo(8) + fibo(7) + fibo(7) + fibo(6)
// 여기까지만 보아도 동일한 문제가 중복으로 계산되는 것을 알 수 있다.

// function fibonacci(n) {
//   if (n <= 1) return n;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

//// Reference
// 본문 Solution 은 클로저 함수, 배열을 활용
// 아래 Solution 은 추가 파라미터, 객체를 활용

function fibonacci(n, memo) {
  memo = memo || {};

  if (memo[n]) return memo[n];
  if (n <= 1) return n;

  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
}
