/**
 * Unknown 타입
 * 모든 타입의 슈퍼 타입
 * 따라서 모든 타입을 업 캐스트할 수 있고, 반대로 모든 타입을 다운캐스트할 수 없다.
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 * 모든 타입의 서브 타입
 * 즉, 모든 집합의 부분 집합 = (수학에선) 공집합
 * 모든 타입으로 업 캐스팅할 수 있다.
 * 다른 타입은 never 타입으로 다운캐스트할 수 없다. -> 따라서 never 타입은 어떤 값도 저장하지 않는 경우에 활용하면 좋다.
 */

function neverExam() {
  // 공집합을 반환한다. = 아무것도 반환하지 않는다.
  function neverFunc(): never {
    while (true) {}
  }

  // 모든 타입으로 업 캐스팅할 수 있다.
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다른 타입은 never 타입으로 다운캐스팅할 수 없다.
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 */
function voidExam() {
  // 아무 것도 반환하지 않는 함수의 타입으로 자주 사용된다.
  function voidFunc(): void {
    console.log("hi");
  }

  // undefined의 슈퍼타입이다.
  let voidVar: void = undefined;
}
