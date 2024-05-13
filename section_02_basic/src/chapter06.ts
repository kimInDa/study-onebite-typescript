// any
// -> 특정 변수의 타입을 우리가 확실히 모를때
// -> 타입 검사는 모두 통과하지만 런타임 에러는 발생하기 떄문에 최대한 사용하지 않는 것이 좋다

let anyVar: any = 10;
anyVar = "hello";

anyVar = true; // -> 값의 타입 상관 없이 넣을 수 있다.
anyVar = {};

anyVar.toUpperCase(); // -> 타입 상관 없이 메서드를 사용할 수 있다.
anyVar.toFixed();

let num: number = 10;
num = anyVar; // -> 모든 타입의 변수에 any 타입의 값을 집어 넣을 수도 있다.

// unknown
// -> any 타입 처럼 어떤 타입의 값이든 넣을 수 있다.
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num2 = unknownVar; // ❌ 오류 ! -> any 타입과 달리 모든 타입의 변수에 unknown 타입의 값을 집어 넣을 수 없다.
// unknownVar * 2 // ❌ 오류 ! -> unknown 타입은 연산을 할 수 없다.
// unknownVar.toUpperCase(); // ❌ 오류 ! -> unknown 타입은 메서드를 사용할 수 없다.

// -> 타입 좁히기 (= 타입 정제)
// --> 조건문으로 unknown 타입의 변수가 number 타입임을 확실히 밝혀주었을 때만 number 타입으로 사용할 수 있다.
if (typeof unknownVar === "number") {
  num = unknownVar;
  unknownVar * 2;
}
