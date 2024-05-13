// ✅ void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

// 1. 함수 return 값 정의
// -> 함수가 아무것도 반환하지 않을 때 void 사용 (undefined ❌)
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// 1-2. 함수의 반환 타입 : void vs undefined vs null
// -> 함수의 반환값을 void가 아닌 undefined나 null로 정의할 경우 함수는 undefined나 null을 반드시 return 해야 한다.
function func3(): undefined {
  return;
}

function func4(): null {
  return null;
}

// 2. 변수 type 정의
// -> void 타입의 변수에는 undefined만 담을 수 있다.
let a: void;
// a = 1; // ❌ 오류!
// a = "hello"; // ❌ 오류!
// a = {} // ❌ 오류!
a = undefined; // ⭕️
// a = null // 🔺 tsconfig.json에서 strictNullChecks 옵션을 끌 경우(false), null도 담을 수 있다.

// ✅ never
// never -> 존재하지 않는
// 불가능한 타입

// 1. 함수가 정상적으로 종료되지 않거나 함수가 반환값이 있는 것이 말이 안되는 경우
function func5(): never {
  while (true) {}
}

function func6(): never {
  throw new Error();
}

// 2. 변수 type 정의
// -> 아무런 값도 담을 수 없다.
let b: never;
// b = 1; // ❌
// b = {}; // ❌
// b = ""; // ❌
// b = undefined; // ❌ -> void와 달리 undefined도 담을 수 없다.
// b = null; // ❌ -> void와 달리 strictNullChecks 옵션을 꺼도 담을 수 없다.

let anyVar: any;
// b = anyVar // // ❌ -> any 타입의 값도 담을 수 없다.
