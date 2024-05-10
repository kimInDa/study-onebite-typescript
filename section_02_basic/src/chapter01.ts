// 타입 주석 (= 타입 annotation)
// -> `변수명: 타입` 형식으로 정의
// -> 콜론(:)과 함께 변수의 타입을 정의하는 문법
// -> 타입스크립트에서 변수의 타입을 정의하는 가장 기본적인 방식

// number
let num1: number = 123; // 양의 정수
let num2: number = -123; // 음의 정수
let num3: number = 0.123; // 양의 소수
let num4: number = -0.123; // 음의 소수
let num5: number = Infinity; // 양의 무한대
let num6: number = -Infinity; // 음의 무한대
let num7: number = NaN; // 특수한 숫자
// num1 = "hello"; // ❌ -> number 타입으로 정의한 변수에는 number 타입을 제외한 값을 할당할 수 없다.
// num1.toUppercase(); // ❌ -> number 타입의 값이 사용할 수 없는 메서드는 사용할 수 없다.

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;
// str1 = 123; // ❌ -> string 타입으로 정의한 변수에는 string 타입을 제외한 값을 할당할 수 없다.
// str1.toFixed(); // ❌ -> string 타입의 값이 사용할 수 없는 메서드는 사용할 수 없다.

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// boolean, null, undefined 역시 지정한 타입의 값 외에는 할당할 수 없다.

// # null 값을 다른 타입의 변수에 할당하기
// -> 자바스크립트에서는 아직 값이 정해지지 않은 변수에 null을 임시로 넣어두곤 했지만, 타입스크립트에서는 에러가 발생한다.
// -> 이럴 때에는 tsconfig에 strictNullChecks 옵션을 false로 설정한다.
let numA: number = null; // ❌ -> ⭕️

// 리터럴 타입
// -> 리터럴 = 값
// -> 값 그 자체가 타입이 되는 타입들
let numB: 10 = 10;
numB = 12; // ❌
let strA: "hello" = "hello";
strA = "Bye"; // ❌
let boolA: true = false; // ❌
