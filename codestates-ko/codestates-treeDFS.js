/* 
Problem definition: 
    임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다. 
    이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.
    생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.

    [제한사항]
    base, sample 내에 중복되는 요소는 없다고 가정합니다.

    입력: 
    'value', 'children' 속성을 갖는 객체 (Node)
    'node.value'는 number 타입
    'node.children'은 Node를 요소로 갖는 배열

    출력: 배열

Example: 
    let root = new Node(1);
    let rootChild1 = root.addChild(new Node(2));
    let rootChild2 = root.addChild(new Node(3));
    let leaf1 = rootChild1.addChild(new Node(4));
    let leaf2 = rootChild1.addChild(new Node(5));
    leaf1.addChild(new Node(6));
    rootChild2.addChild(new Node(7));

    Input: root
    Output: [1, 2, 4, 6, 5, 3, 7]
*/

// Solution (Reference)
let dfs = function (node) {
  let values = [node.value];

  node.children.forEach((n) => {
    values = values.concat(dfs(n));
  });

  return values;
};

// Provided Constructor functions
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

// lesson
// [3].concat([1, 2]) -> [3, 1, 2] 와 같이 concat 의 인자로 배열도 가능.
// 함수가 호출될 때마다, 스택에 쌓여 last in first out 순으로 실행된다는 점을 이용하여
// 재귀로 푸는 문제였다.
