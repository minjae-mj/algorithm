/* 
link: https://programmers.co.kr/learn/courses/30/lessons/72410

Problem definition: 
    [신규 아이디 추천]
    카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
    다음은 카카오 아이디의 규칙입니다.

    아이디의 길이는 3자 이상 15자 이하여야 합니다.
    아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
    단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
    "네오"는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.
    신규 유저가 입력한 아이디가 new_id 라고 한다면,

    1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
        만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

    신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.

    [제한사항]
    new_id는 길이 1 이상 1,000 이하인 문자열입니다.
    new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
    new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.

Example: 
    Input: "...!@BaT#*..y.abcdefghijklm"
    Output: "bat.y.abcdefghi"

    Input: "z-+.^."
    Output: "z--" 
*/

// Solution
function solution(new_id) {
  let lowercasedId = new_id.toLowerCase();
  let newIdArr = Array.prototype.filter.call(lowercasedId, (el) =>
    el.match(/[-a-z0-9_.]/)
  );

  for (let i = 0; i < newIdArr.length; i++) {
    if (newIdArr[i] + newIdArr[i + 1] === "..") {
      newIdArr[i] = null;
    }
  }

  let newId = newIdArr.join("");

  if (newId[0] === ".") newId = newId.slice(1);
  if (newId[newId.length - 1] === ".") {
    let lastIdx = newId.length - 1;
    newId = newId.slice(0, lastIdx);
  }
  if (!newId) newId = "a";
  if (newId.length >= 16) newId = newId.slice(0, 15);
  while (newId.length < 3) newId += newId[newId.length - 1];

  if (newId[newId.length - 1] === ".") {
    let lastIdx = newId.length - 1;
    newId = newId.slice(0, lastIdx);
  }

  return newId;
}

//// Reference
// 내가 푼 것과 대체적인 로직은 비슷하지만 더 간결하며, 세 가지가 눈에 띈다. 시간 효율도 3배 가까이 좋다.
// 1) 정규표현식을 사용하는 대신, 허용하는 문자열 대비 인자로 받은 문자열을 순회하며 대조하여
//    허용하는 경우 continue로 통과시켜서 2, 3단계 요구사항을 만족하는 새 문자열 완성
// 2) 15자리 이상 검사하지 않고 아묻따 15자리 slice().
// 3) 4단계, 6단계에서 마침표가 끝에 오는 경우를 중복 검사하지 않고
//    적절한 위치(Line 91) 에서 한 번에 검사

function solution(nid) {
  var ans = "";

  for (let i = 0; i < nid.length; i++) {
    let c = nid[i].toLowerCase();
    if ("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf(c) === -1) continue;
    if (c === "." && ans[ans.length - 1] === ".") continue;
    ans += c;
  }

  if (ans[0] === ".") ans = ans.slice(1);

  ans = ans.slice(0, 15);

  if (ans[ans.length - 1] === ".") ans = ans.slice(0, ans.length - 1);

  if (!ans) ans = "a";

  while (ans.length < 3) ans += ans[ans.length - 1];

  return ans;
}
