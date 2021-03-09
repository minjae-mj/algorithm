/* 
Problem definition: 
    정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
    버블 정렬(bubble sort)은 여러 정렬 알고리즘(삽입 정렬, 퀵 정렬, 병합 정렬, 기수 정렬 등) 중 가장 기본적인 알고리즘입니다.

    버블 정렬 알고리즘은 아래와 같습니다.

    첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
    두 번째 요소와 세 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
    1, 2를 마지막까지 반복합니다. (마지막에서 두 번째 요소와 마지막 요소를 비교)
    1~3의 과정을 한 번 거치게 되면, 가장 큰 요소가 배열의 마지막으로 밀려납니다.
    1~3의 과정을 첫 요소부터 다시 반복합니다.
    5를 통해 두 번째로 큰 요소가 배열의 마지막 바로 두 번째로 밀려납니다.
    1~3의 과정을 총 n번(배열의 크기) 반복합니다.
    이 모습이 마치 '거품이 밀려 올라가는 것과 같은 모습'과 같아서 bubble sort라고 부릅니다.

    [제한사항]
    위에서 설명한 알고리즘을 구현해야 합니다.
    arr.sort 사용은 금지됩니다.
    입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

    입력:
    number 타입을 요소로 갖는 배열
    arr[i]는 정수
    arr[i]의 길이는 1,000 이하
        
    출력:
    number 타입을 요소로 갖는 배열을 리턴해야 합니다.
    배열의 요소는 오름차순으로 정렬되어야 합니다.
    arr[i] <= arr[j] (i < j)
    

Example: 
    Input: [2, 1, 3]
    Output: [1, 2, 3]
*/

// Solution (optimised)
const swap = function (idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
};

let bubbleSort = function (arr) {
  let N = arr.length;

  for (let i = 0; i < N; i++) {
    // swap 횟수를 기록한다.
    // 어떤 요소도 swap되지 않은 경우, 배열은 정렬된 상태이다.
    let swaps = 0;

    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
      }
    }

    if (swaps === 0) {
      break;
    }
  }

  return arr;
};

// naive solution
// 두 변수를 바꾸는 swap 함수를 모듈화하여, 본문 Solution 과 아래 Solution 에서 모두 사용

// let bubbleSort = function (arr) {
//   let N = arr.length;

//   for (let i = 0; i < N - 1; i++) {
//     // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
//     // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
//     for (let j = 0; j < N - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(j, j + 1, arr);
//       }
//     }
//   }

//   return arr;
// };
