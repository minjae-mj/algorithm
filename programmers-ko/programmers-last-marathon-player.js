/* 
link: https://programmers.co.kr/learn/courses/30/lessons/42576

Problem definition: 
    [완주하지 못한 선수]
    수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
    마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
    완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

    [제한사항]
    마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
    completion의 길이는 participant의 길이보다 1 작습니다.
    참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
    참가자 중에는 동명이인이 있을 수 있습니다.

Example: 
    Input: ["leo", "kiki", "eden"], ["eden", "kiki"]
    Output: "leo"

    Input: ["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]
    Output: "mislav"
*/

// Solution
function solution(participant, completion) {
  const sortedCompletion = completion.sort();
  let foundPlayer = participant
    .sort()
    .find((player, idx) => player !== sortedCompletion[idx]);

  return foundPlayer;
}

// trial-1
// 정확성 테스트는 전부 통과하지만, 효율성 테스트는 전부 실패

// function solution(participant, completion) {
//   let players = participant.slice(0);

//   for(let i =0; i < completion.length; i++) {
//       let idx = players.indexOf(completion[i]);
//       players.splice(idx, 1)
//   }

//   return players[0];
// }

// trial-2
// 모든 테스트를 통과한다. 최종 코드와 큰 차이는 없지만 filter 는 새로운 배열을 생성해내므로,
// find 메소드로 대체하여 변수를 그대로 반환하도록 변경하였다.

// function solution(participant, completion) {
//   const sortedCompletion = completion.sort();
//   let foundPlayer = participant.sort().filter((player, idx) => player !== sortedCompletion[idx]);

//   return foundPlayer[0];
// }
