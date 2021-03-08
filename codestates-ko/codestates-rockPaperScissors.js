/* 

Problem definition: 
    [가위바위보]
    가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임이다. 
    세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.

    2차원 배열(arr[i])을 리턴해야 합니다.
    arr[i]는 전체 경우의 수 중 한 가지 경우(총 세 번의 선택)를 의미하는 배열입니다.
    arr[i]는 'rock', 'paper', 'scissors' 중 한 가지 이상을 요소로 갖는 배열입니다.
    arr[i].length는 3

    [제한사항]
    최종적으로 리턴되는 배열의 순서는 가중치 적용 정렬(Weighted Sort)을 따릅니다.
    중요도는 'rock', 'paper', 'scissors' 순으로 높습니다.
    쉽게 생각해 올림픽 순위 결정 방식을 참고하면 됩니다.
    금메달('rock')이 은메달('paper')보다 우선하고, 은메달('paper')이 동메달('scissors')보다 우선합니다.

Example: 
    Input: N/A
    Output: [
      ["rock", "rock", "rock"],
      ["rock", "rock", "paper"],
      ["rock", "rock", "scissors"],
      ["rock", "paper", "rock"],
      ...etc
    ]
*/

// Solution
const rockPaperScissors = function () {
  let content = ["rock", "paper", "scissors"];
  let result = [];

  for (let r = 0; r < content.length; r++) {
    for (let p = 0; p < content.length; p++) {
      for (let s = 0; s < content.length; s++) {
        let newContent = [];
        newContent.push(content[r], content[p], content[s]);
        result.push(newContent);
      }
    }
  }

  return result;
};

/* 

Advanced problem: 
    가위바위보 게임의 수를 나타내는 양의 정수 rounds가 주어질 경우, 해당 rounds 동안 선택할 수 있는 모든 경우의 수를 리턴하도록 함수를 작성해 보세요.

Example: 
    Input: 5
    Output: [
      ["rock", "rock", "rock", "rock", "rock"],
      ["rock", "rock", , "rock", "rock", "paper"],
      ["rock", "rock", , "rock", "rock", "scissors"],
      ["rock", "rock", "rock", "paper", "rock"],
      ["rock", "rock", "rock", "paper", "paper"],
      ["rock", "rock", "rock", "paper", "scissors"],
      ["rock", "rock", "rock", "scissors", "rock"],
      ...etc
    ]

*/

// Reference
// 1) 위의 기본 문제를 포함하도록 rounds 에 디폴트 값 설정
// 2) 클로저 함수를 만들어 계산하고, 외부 변수 값을 반환함
const rockPaperScissors = function (rounds) {
  rounds = rounds || 3;
  const rps = ["rock", "paper", "scissors"];

  const outcomes = [];
  let permutate = function (roundsToGo, playedSoFar) {
    if (roundsToGo === 0) {
      outcomes.push(playedSoFar);
      return;
    }

    for (let i = 0; i < rps.length; i++) {
      let currentPlay = rps[i];
      permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }
  };

  permutate(rounds, []);

  return outcomes;
};
