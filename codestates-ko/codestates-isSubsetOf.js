/* 

Problem definition: 
    두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

    [제한사항]
    base, sample 내에 중복되는 요소는 없다고 가정합니다.

    입력: 
    1) base
      number 타입을 요소로 갖는 임의의 배열 
      base.length는 100 이하
    2) sample
      number 타입을 요소로 갖는 임의의 배열
      sample.length는 100 이하

    출력: boolean 타입

Example: 
    Input: [1, 2, 3, 4, 5], [1, 3]
    Output: true

    Input: [10, 99, 123, 7], [11, 100, 99, 123]
    output: false 
*/

// Solution (Reference)
const isSubsetOf = function (base, sample) {
  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)

  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  // sample[i] 를 순회하며 base 에서 찾긴 하되
  // base 의 처음부터 대조하지 않고, baseIdx 를 사용하여 logN 시간 효율 달성
  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};

// trial-1
// Naive Solution. sample 의 요소를 일일이 순회한다.

// const isSubsetOf = function (base, sample) {
//   for(let i = 0; i < sample.length; i++) {
//     if(!base.includes(sample[i])) return false;
//   }

//   return true;
// };

// trial-2
// Naive solution 이지만, 위의 코드를 every() 로 간략화한 예시
// O(M * N)

// const isSubsetOf = function (base, sample) {
//   return sample.every((item) => base.includes(item));
// };
