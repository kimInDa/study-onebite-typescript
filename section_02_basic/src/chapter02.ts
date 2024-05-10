// 배열
// 1. 배열 타입 정의 방법
// 1-1. 기본 방식
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterwood"];
// 1-2. 제네릭 문법
let boolArr: Array<boolean> = [true, false];

// 2. 배열에 들어가는 요소들의 타입이 다양할 경우
// -> 유니온(Union) 타입
let multiArr: (number | string)[] = [1, "hello"];

// 3. 다차원 배열의 타입을 저장하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// -> 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // ❌ -> 길이를 넘는 배열은 저장할 수 없다.
// tup1 = ["a", "b"]; // ❌ -> 타입이 다른 배열은 저장할 수 없다.
// tup1 = [10, 11]; // ⭕️ -> 길이와 타입 모두 만족하는 배열이므로 저장할 수 있다.

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ["a", false, 3] // ❌ -> 순서가 다르면 저장할 수 없다.

// -> 튜플도 배열이므로 배열 메서드 사용이 가능하다.
// -> 다만, 메서드를 사용할 때에는 튜플의 길이 제한이 발동하지 않는다. 따라서 튜플에 배열 메서드로 요소를 추가하거나 제거하는 기능을 사용할 때에는 각별히 주의해서 사용해야 한다.
tup1.push(1); // ❓
tup1.pop(); // ❓

// 튜플을 활용 예시
// -> 배열의 인덱스 위치에 따라서 넣어야 되는 값들이 정해져 있고 그 순서를 지키는 게 중요할 때, 튜플을 이용해서 값을 잘못 넣지 않도록 방지해줄 수 있다.
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "최아무개"], // ❌ -> 오류! 순서 실수를 방지할 수 있다.
];